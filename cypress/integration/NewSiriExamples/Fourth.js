///<reference types="Cypress" />

describe('My Fourth Test Suite', function()
{
it('My First Test case', function()
{

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //selecting Alert/ pop up
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()

    //window:alert event (this will get fired when the browser opens a pop up)
    cy.on('window:alert',(str)=>
    {
        //Mocha- compare 2 strings
        expect(str).to.equal('Hello , share this practice page and share your knowledge')

    })
    //window:confirm event
    cy.on('window:confirm',(str1)=>
    {
        //Mocha- compare 2 strings
        expect(str1).to.equal('Hello , Are you sure you want to confirm?')

    })
})
it('My Second Test case', function()
{
    //Handling child windows
    // removing the target to not open the page in a new tab
     cy.get('#opentab').invoke('removeAttr','target').click()
    // opening a page in a new tab
    //cy.get('#opentab').should('have.attr','target','_blank').click()
    //cy.get('#opentab').click()
  
    //Validating the page is correct or not
    cy.url().should('include','rahulshettyacademy.com')
     //Navigating browser controls
    cy.go('back') 
})

it('My Third Test case', function()
{
    //Handling child windows 
    //Grabbing the href attribute value
    cy.get('#opentab').then(function(el)
{
    //const url=el.attr('href')
    const url=el.prop('href')
    cy.log(url)
    cy.visit(url)

})

})    
})