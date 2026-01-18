class CartPage {
    goToCart() {
        cy.get('ul[data-v-bb7b5941=""] > :nth-child(2)').click();
    }

    sumCartItems() {
        let total = 0

        cy.get('li.list-item > :nth-child(3)').each(($el) => {
            const valor = Number(
                $el.text().replace('$', '').trim()
            )
            total = total + valor
        }).then(() => {
            cy.log(`Total: $${total.toFixed(2)}`)
            expect(total).to.be.greaterThan(0)
            cy.get('[data-test="checkout"]').contains(`Total: $${total.toFixed(2)}`)
        })
    }

    removeCartItem(item) {
        cy.get('li.list-item > :nth-child(4)').eq(item).click();
    }
}

export default new CartPage()