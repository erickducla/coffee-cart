class PaymentPage {
    fillPaymentModal(name, email) {
        cy.get('[data-test="checkout"]').should('be.visible').click()
        cy.get('#name').should('be.visible').and('be.enabled').type(name)
        cy.get('#email').should('be.visible').and('be.enabled').type(email)
        cy.get('#promotion').should('be.visible').and('be.enabled').check()
        cy.get('#submit-payment').should('be.visible').click()
    }
}

export default new PaymentPage();