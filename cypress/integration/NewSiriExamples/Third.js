///<reference types="Cypress" />

describe('My Third Test Suite', function()
{
it('My First Test case', function()
{

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // To select the checkbox option1 and verify it's checked and selected value is 'option1'
    //cy.get('input#checkBoxOption1').check().should('be.checked').should('have.value', 'option1')
    cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')   // when multiple 'should' property comes, can use '.and'

    // To unselect the checkbox option1 and verify it's unchecked and selected value is 'option1'
    cy.get('input#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')    

    // to select multiple checkboxes at a time
    cy.get('input[type="checkbox"]').check(['option2','option3'])

})

it('My Second Test case', function()
{
    // Selecting options from the static dropdowns
    cy.get('select').select('option2').should('have.value', 'option2')

    // Selecting options from the dynamic dropdowns
   cy.get('#autocomplete').type('can')
   cy.get('.ui-menu-item div').each(($el, index, $list) =>
    {
        
    if($el.text()==="Canada")
    {
        $el.click()
    }

   })
   //validate the selected autocomplete option is the correct one or  not using assertions
   cy.get('#autocomplete').should('have.value','Canada')

})

it('My Third Test case', function()
{
   //Handling visible/ invisible elements

cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

})

it('My Fourth Test case', function()
{
   //Selecting radio button options

   cy.get('[value="radio2"]').check().should('be.checked').and('have.value', "radio2")
  
})

})