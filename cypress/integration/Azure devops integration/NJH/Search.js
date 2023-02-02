/// <reference types="cypress" />

describe('My NJH Test Suite', function() 
{

    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      it('fails to visit website 1', function () {
        cy.visit("https://njhmvc-qa.reasononeinc.com")

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

//assert if main logo is displayed

//cy.get('app-header__logo').should('have.text', 'National Jewish Health')


//assert if Global Search box is displayed
        cy.get('.app-header__quick-nav-search').click()
        cy.wait(2000)
           cy.get('#appHeader__searchInput').type('test')
        cy.get('button.btn.btn-sm.btn-blue--700.app-header__search-submit').click()
          cy.wait(6000)

// Successful Search Results page
        cy.get('header.subpage__header').contains('Search')
        cy.get('div.rich-text').contains('This is a search landing page')

        
          
})

})
