/// <reference types="Cypress" />
import HomePage from "../../support/pageObjects/HomePage"
import ProductsPage from "../../support/pageObjects/ProductsPage"
import CheckoutPage from "../../support/pageObjects/CheckoutPage"
//import { sum } from "cypress/types/lodash"

describe('My Framework Test2', function()
{
    before(function() 
    {
          // runs once before all tests
          cy.fixture('Framework1Testdata').then(function(data)
          {
            this.d1=data
          })
    })
it('My First Test case', function()
{
    const homepage=new HomePage()
    const productspage =new ProductsPage()
    const checkoutpage = new CheckoutPage()

    //cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.visit(Cypress.env('url')+"/angularpractice")   //Using the base url from the environment variables

       //using the Homepage object to pull the methods

       homepage.getEditBox().type(this.d1.name)
       homepage.getTwoWayDataBinding().should('have.value',this.d1.name)  //vaidation for name =two-way binding field text
       homepage.getGender().select(this.d1.gender)
       homepage.getEditBox().should('have.attr', 'minlength', '2') //vaidation for name min length is 2
       homepage.getEnterpreneur().should('be.disabled') //vaidation for 'entrpreneur' radio button is disabled
       Cypress.config('defaultCommandTimeout', 8000)
       homepage.getShopTab().click() //css from the test runner

  // Using the Customized cypress commands to select the products
     cy.selectProduct('Samsung Note 8')
     cy.selectProduct('Blackberry')
     
  //Parameterize test with Multiple data sets from json file of fixtures folder
    this.d1.productName
    this.d1.productName.forEach(function(element)
    {
       cy.selectProduct(element)
    });
    
    // using the Productspage object to pull the methods

    productspage.getCheckoutButton().click()  
    //productspage.getContinueShopping().click()
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => 
    {
     // cy.log($el.text())
        const amount=$el.text()
        var res= amount.split(" ")   //splitting the money symbol and amount
        res= res[1].trim()  //removing the space before the price
        cy.log(res)
        
        //converting a string to Number in Javascript
        sum=Number(sum)+Number(res)  //wrapping the string with 'Number' method

    })
        .then(function()
        {
           cy.log(sum)
        })
      cy.get('h3 strong').then(function(element)
      {
         const amount=element.text()
         var res= amount.split(" ")   //splitting the money symbol and amount
         var total= res[1].trim()  //removing the space before the price
         expect(Number(total)).to.equal(sum)   // to compare values or strings

      })
      productspage.getFinalCheckout().click()
        
   // using the CheckoutPage object to pull the methods
      checkoutpage.getCountryEditBox().type("india")
      checkoutpage.getSuggestionText().click()
      checkoutpage.getPrimaryCheckBox().click()
      checkoutpage.getPurchaseButton().click()
      checkoutpage.getSuccessAlert().should('contain', "Success! Thank you! Your order will be delivered in next few weeks :-)")   
       
})
})
