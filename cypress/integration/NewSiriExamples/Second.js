///<reference types="Cypress" />

describe('My Second Test Suite', function()
{
it('My First Test case', function()
{

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(3000)
   
    //Parent child chaining
    cy.get('.products').as('productLocator')    //as is like alias
       cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        
        const textveg=$el.find('h4.product-name').text()
        if(textveg.includes("Cashews"))
        {
        $el.find('button').click()
        }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    //cy.get(':nth-child(14)').click()
    cy.contains('Place Order').click()
})

})