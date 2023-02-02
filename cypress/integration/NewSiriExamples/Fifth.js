///<reference types="Cypress" />

describe('My Fifth Test Suite', function()
{
it('My First Test case', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => 
{   
    const text=$el.text()
    if(text.includes("Python"))
    {
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
    {
        const priceText= price.text()
        expect(priceText).to.equal('25')
    })
    }
  })
})
it('My Second Test case', function()
{
    // Handling the invisble element to make it visible with jquery function 
      // cy.get('div.mouse-hover-content').invoke('show')
    // Handling the invisble element by passing force:true argument in click method 
    cy.contains('Top').click({force: true})
    cy.url().should('include','top')

})

})
