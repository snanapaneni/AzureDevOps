///<reference types="Cypress" />

describe('My Framework Test', function()
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
    //cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.visit(Cypress.env('url')+"/angularpractice")   //Using the base url from the environment variables

        // css from testrunner
        //cy.get(':nth-child(1) > .form-control').type("Sireesha")
        //or
    cy.get('input[name="name"]:nth-child(2)').type(this.d1.name)
        // css from testrunner
        //cy.get('#exampleFormControlSelect1').select('Female')  
        //or
    cy.get('select').select(this.d1.gender)
    cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.d1.name) //vaidation for name =two-way binding field text
    cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2') //vaidation for name min length is 2
    //cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'required type', 'text') //vaidation for name field required type is text
    cy.get('#inlineRadio3').should('be.disabled') //vaidation for 'entrpreneur' radio button is disabled
    
    cy.get('input.btn.btn-success').click()
    cy.get(':nth-child(2) > .alert').should('contain', "Success! The Form has been submitted successfully!")

})
after(function()
{
    // runs once after all tests in block
     cy.get('input[name="name"]:nth-child(2)').clear()
     cy.get('input.btn.btn-success').click()
     cy.get(':nth-child(1) > .alert').should('contain', "Name is required")
    
 })
  
  
})
