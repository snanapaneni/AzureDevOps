class CheckoutPage
{
getCountryEditBox()
{
  return  cy.get('#country')
}
getSuggestionText()
{
    return cy.get('.suggestions > ul > li > a')
}
getPrimaryCheckBox()
{
    return cy.get('div.checkbox.checkbox-primary')
}
getPurchaseButton()
{
    return cy.get('input[type="submit"]')
}
getSuccessAlert()
{
    return cy.get('div.alert.alert-success.alert-dismissible')
}

}
export default CheckoutPage;