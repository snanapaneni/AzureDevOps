/// <reference types="cypress" />

describe('My First Test Suite', function() 
{

it('My First Test case', function()
{

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(3000)

cy.get('div.product:visible').should('have.length',4)       //(using visible element)

//parent child chaining
cy.get('.products').as('productLocator')

cy.get('@productLocator').find('.product').should('have.length',4)
cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
{
    console.log('Hello') 
} )
console.log('Hello')   //Console.log is Not related to cypress, this will log in the browser console, it's pure js print function
cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
    
        const VegText=$e1.find('h4.product-name').text()
        if((VegText).includes('Cashews'))
        {
            //$e1.contains('ADD TO CART').click()
            $e1.find("button").click()
        }   

    } )

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        // this is to print in logs
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())  //cy.log is related to cypress and will print in the cypress test runner
            
        }  )
        
        //const logo=cy.get('.brand')
        //cy.log(logo.text())        


//cy.visit("https://vucavu.com/en/search")
//cy.get('.searchform').type('snow')
//cy.wait(2000)
//cy.get('button.submit').click({multiple: true}, {force: true})
//cy.wait(3000)
//cy.contains('.small-12.columns.title.h2.ng-binding', '17 Results')


//fixture

}
)})

