/// <reference types="cypress" />

describe('Stericycle Form input validation', function() 
{

    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      it('fails to visit website 1', function () {
        cy.visit("http://stericycle-qa.reasononeinc.com/marketing/leader-in-regulated-medical-waste-disposal")
cy.wait(3000)

//assert if logo text is correctly displayed
     cy.get('.c-newsletter-logo').should('have.length', 2)

      //assert if Form title is correctly displayed
    cy.get('h2.c-modal-title').should('have.text', 'Contact Us Today for a Free Quote')
       
    cy.get('.form-control').should('have.length', 7)
       
    // Error messages validation
        
       // it('check validation message on invalid input', () => {
         //   cy.get('input:invalid').should('have.length', 0)
           // cy.get('[type="email"]').type('not_an_email')
           // cy.get('[type="submit"]').click()
           // cy.get('input:invalid').should('have.length', 1)
           //cy.get('[type="email"]').then(($input) => {
           //   expect($input[0].validationMessage).to.eq('Please enter a valid email address')
           // })
            
     //   } )

        //    }
     //     )
        
        //    }
     //     )

          
})

})
