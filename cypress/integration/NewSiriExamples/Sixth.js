///<reference types="Cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My Frames Test', function()
{
it('My First Frames Test case', function()
{
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.visit(Cypress.env('url')+"/AutomationPractice")   //Using the url from the environment variables

    cy.frameLoaded("#courses-iframe")
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    cy.iframe().find("h1[class*='pricing-title']").should('have.length', '2')

})

})
