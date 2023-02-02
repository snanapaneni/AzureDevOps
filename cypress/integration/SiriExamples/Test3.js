/// <reference types="cypress" />

describe('My Second Test Suite', function() 
{

it('My Second Test case', function()
{

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//work with checkboxes
cy.get('#checkBoxOption1').check().should("be.checked").and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3'])

//Static Dropdown

cy.get('select').select('option1').should('have.value', 'option1')

//Dynamic Dropdown , working with the textboxes 

cy.get('#autocomplete').type('Ind')
//cy.get('.ui-menu-item div').each(($e1, index, $list) => {
    cy.get('li.ui-menu-item').each(($e1, index, $list) => {
        
    if($e1.text()==="India")
    {
        $e1.click()

    }
})

//Autocomplete 
cy.get('#autocomplete').should('have.value','India')

//Elelments visibile/invisisble
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

// Work with radio buttons

cy.get('[value= "radio2"]').check().should('be.checked')

})

})

