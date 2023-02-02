class ProductsPage
{
getCheckoutButton()
{
  return  cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    
}
getContinueShopping()
{
    return cy.get(':nth-child(4) > .btn')
}
getFinalCheckout()
{
    return cy.get(':nth-child(5) > :nth-child(5) > .btn')

}

}
export default ProductsPage;
