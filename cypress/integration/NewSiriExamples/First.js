///<reference types="Cypress" />

describe('My First Test Suite', function()
{
it('My First Test case', function()
{

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(3000)
cy.get('.product').should('have.length', 5)
cy.get('.product:visible').should('have.length', 4)
//Parent child chaining
cy.get('.products').find('.product').should('have.length', 4)
cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
console.log('Sireesha')
cy.get(':nth-child(3) > .product-action > button').click()   //locator from the test runner
cy.get('.products').find('.product').each(($el, index, $list) => {
    
    const textveg=$el.find('h4.product-name').text()
    if(textveg.includes("Cashews"))
    {
    $el.find('button').click()
    }
})
cy.get('.brand').then(function(logoelement)
{
cy.log(logoelement.text())
})


})
it('My Second Test case', function()
{

  //  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.visit(Cypress.env('url')+"/seleniumPractise")   //Using the base url from the environment variables

    cy.get('.search-keyword').type('ca')
    cy.wait(3000)
    cy.get('.product').should('have.length', 5)
    cy.get('.product:visible').should('have.length', 4)
    //Parent child chaining
    cy.get('.products').as('productLocator')    //as is like alias
    cy.get('@productLocator').find('.product').should('have.length', 4)
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
    {
    console.log('Hello Sireesha')  // Console.log is Not related to cypress, this will log in the browser console, it's pure js print function
    })

    cy.get(':nth-child(3) > .product-action > button').click()   //locator from the test runner
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        
        const textveg=$el.find('h4.product-name').text()
        if(textveg.includes("Cashews"))
        {
        $el.find('button').click()
        }
    })

    //assert if logo text is correctly displayed
    cy.get('.brand').should('have.text','GREENKART')

    //this is to print in logs
    cy.get('.brand').then(function(logoelement)
    {
      cy.log(logoelement.text())  //cy.log is related to cypress and will print in the cypress test runner

    })
    
    
})

})