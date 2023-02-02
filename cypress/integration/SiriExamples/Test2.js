/// <reference types="cypress" />

describe('My Second Test Suite', function() 
{

  //  Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
     //   return false
    // })

it('My Second Test case', function()
{

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(3000)

//parent child chaining
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
    
        const VegText=$e1.find('h4.product-name').text()
        if((VegText).includes('Cashews'))
        {
            $e1.find("button").click()
        }   

    } )
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/cart")
        cy.contains('Place Order').click()
        //cy.contains('Place Order').click({multiple: true},{force: true})
       //cy.get('#root.button').contains('Place Order').click()

      
}
)})

