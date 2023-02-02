/// <reference types="Cypress" />
import HomePage from "../../support/pageObjects/HomePage"
import ProductsPage from "../../support/pageObjects/ProductsPage"
import CheckoutPage from "../../support/pageObjects/CheckoutPage"

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

   // cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.visit(Cypress.env('url')+"/angularpractice")   //Using the base url from the environment variables


       //using the Homepage object to pull the methods

       homepage.getEditBox().type(this.d1.name)
       homepage.getTwoWayDataBinding().should('have.value',this.d1.name)  //vaidation for name =two-way binding field text
       homepage.getGender().select(this.d1.gender)
       homepage.getEditBox().should('have.attr', 'minlength', '2') //vaidation for name min length is 2
       homepage.getEnterpreneur().should('be.disabled') //vaidation for 'entrpreneur' radio button is disabled
       Cypress.config('defaultCommandTimeout', 8000)
       homepage.getShopTab().click() //css from the test runner
    
// Select the products in the cart based on the specified product name
     //cy.get('h4.card-title').each(($el, index, $list) => {
      //   const textphone=$el.text()
      // if(textphone.includes("Samsung Note 8"))
      //{
      //cy.get('button.btn.btn-info').eq(index).click()
      //cy.get('a.nav-link.btn.btn-primary').should('have.value', '')
      //}
      //})

  // Using the Customized cypress commands to select the products
     cy.selectProduct('Samsung Note 8')
     cy.selectProduct('Blackberry')
     
  //Parameterize test with Multiple data sets from json file of fixtures folder
    this.d1.productName
    this.d1.productName.forEach(function(element)
    {
       cy.selectProduct(element)
    });
    
    //using the Testrunner css
        //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()  
        // or
         // cy.contains('Checkout').click()
          //cy.get(':nth-child(4) > .btn').click() 
          //cy.get(':nth-child(5) > :nth-child(5) > .btn').click() 

    // using the Productspage object to pull the methods

    productspage.getCheckoutButton().click()  
    //productspage.getContinueShopping().click()
    productspage.getFinalCheckout().click()
        
    //completing the checkout process using the Testrunner css
      //  cy.get('#country').type('india')
      //  cy.wait(3000)
      //  cy.get('.suggestions > ul > li > a').click()
      //  cy.get('div.checkbox.checkbox-primary').click()
        //or
      //cy.get('#checkbox2').click({force: true})
      //  cy.get('input[type="submit"]').click()
        //cy.get('div.alert.alert-success.alert-dismissible').should('contain', "Success! Thank you! Your order will be delivered in next few weeks :-)")   
         //or text comparison for the Partial text
            // cy.get('.alert').then(function(element)
            //     { 
            //const actualText=element.text()
            //expect(actualText.includes("Success")).to.be.true
            // })

    // using the CheckoutPage object to pull the methods
      checkoutpage.getCountryEditBox().type("india")
      checkoutpage.getSuggestionText().click()
      checkoutpage.getPrimaryCheckBox().click()
      checkoutpage.getPurchaseButton().click()
      checkoutpage.getSuccessAlert().should('contain', "Success! Thank you! Your order will be delivered in next few weeks :-)")   

})
})
