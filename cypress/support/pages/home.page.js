class HomePage {
    visit() {
        cy.visit("/");
    }

    selectThreeDifferentCoffees() {
        cy.get('[data-cy="Cappuccino"]').should('be.visible').click();
        cy.get('[data-cy="Espresso"]').should('be.visible').click();
        cy.get('[data-cy="Americano"]').should('be.visible').click();
    }

    checkPromotionalModal() {
        cy.contains('span', "It's your lucky day! Get an extra cup of Mocha for $4.").should('be.visible');
    }

    acceptMochaPromotion() {
        cy.get('button[data-v-852f3b25].yes').should('be.visible').click();
    }

    checkSuccessMessage() {
        cy.get('.snackbar.success').should('be.visible').contains('Thanks for your purchase. Please check your email for payment.');
    }
}

export default new HomePage()