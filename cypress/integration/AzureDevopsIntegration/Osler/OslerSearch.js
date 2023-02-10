/// <reference types="cypress" />

describe('My Osler Test Suite', function() 
{

    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      it('fails to visit website 1', function () {
        cy.visit("https://www.osler.com/en/home")

        cy.wait(2000)

// set viewport to 375px X 667px (iPhone-6/8)
       // cy.viewport('iphone-6')
// set viewport to 375px X 812px (iPhone-X)
       //cy.viewport('iphone-x')
// set viewport to 393px X 830px (pixel-4)
       // cy.viewport(393, 830)
// set viewport to 768px X 1024px (iPad-2)
       // cy.viewport('ipad-2')
// set viewport to 810px X 1080px (iPad7th)
       //cy.viewport(810, 1080)

//assert if main nav has Team and Expertise

cy.get('#p_lt_ctl05_PrimaryNavigation_rptItems_ctl00_lnkMenu').contains('Team')

//assert if Global Search box is displayed
        cy.get('#lblHeaderSearch').should('have.text', 'Search the site:')
        cy.get('#txtHeaderSearchBox').type('legislative')
        cy.get('#btnHeaderSearch').contains('Search').click()
        cy.wait(6000)

// Successful Search Results page
        cy.get('div.row').contains('Search Results')
       // cy.get('input.search-input').contains('legislative')

        //cy.get('#inputSearchBox').should('have.text', 'legislative')
       
  
 
          
})

})
