/// <reference types="cypress" />

describe('My Stericycle Test Suite', function() 
{

    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      it('fails to visit website 1', function () {
        cy.visit("http://stericycle-qa.reasononeinc.com/marketing/leader-in-regulated-medical-waste-disposal")

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

//assert if logo text is correctly displayed
      cy.get('.c-newsletter-logo').should('have.length', 2)

//assert if Form title is correctly displayed
        cy.get('h2.c-modal-title').should('have.text', 'Contact Us Today for a Free Quote')
       
        cy.get('.form-control').should('have.length', 7)
       
        cy.get('div.form-element-wrap.field-Company.full-width:visible').contains('Company name (required)').click().type('test123')
        cy.get('div.form-element-wrap.field-PostalCode.full-width').contains('ZIP Code (required)').click().type('test123')
        cy.get('div.form-element-wrap.field-FirstName.half').contains('First Name (required)').click().type('test123')
        cy.get('div.form-element-wrap.field-LastName.half.right').contains('Last Name (required)').click().type('test123')
        cy.get('div.form-element-wrap.field-Phone.full-width').contains('Business Phone (required)').click().type('test123')
        cy.get('div.form-element-wrap.field-Email.full-width.extra-margin').contains('Your Email Address (required)').click().type('test123@test.com')
        cy.get('p.link').contains('Privacy Policy')
       
        cy.get('input#p_lt_ctl01_pageplaceholder_p_lt_ctl00_SC_Widget_2ColumnsLayout2_SC_Widget_2ColumnsLayout2_2_SC_Widgets_StericycleFormInline1_BizForm_btnOK').contains('Request a Free Quote Now').click()
        cy.wait(2000)
 // Successful submission Thank You page
        cy.get('div.c-multistep-thankyou').contains('Success! Thank you for contacting us! A representative will be in touch with you soon.')
        cy.get('a.c-button-primary').contains('Close').click()
 // Returning back to the original form state
        cy.get('input#p_lt_ctl01_pageplaceholder_p_lt_ctl00_SC_Widget_2ColumnsLayout2_SC_Widget_2ColumnsLayout2_2_SC_Widgets_StericycleFormInline1_BizForm_btnOK').contains('Request a Free Quote Now')

        
          
})

})
