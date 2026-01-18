const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { faker } from '@faker-js/faker';
import HomePage from "../pages/home.page.js";
import CartPage from "../pages/cart.page.js";
import PaymentPage from "../pages/payment.page.js";

Given("que acesso a loja de cafés", () => {
  HomePage.visit();
});

When("seleciono três cafés diferentes", () => {
  HomePage.selectThreeDifferentCoffees();
});

When("visualizo a aparição do modal de oferta promocional", () => {
  HomePage.checkPromotionalModal();
});

When("aceito a promoção do café Mocha", () => {
  HomePage.acceptMochaPromotion();
});

When("verifico que o carrinho contém quatro itens com valores corretos", () => {
  CartPage.goToCart();
  CartPage.sumCartItems();
})

When("removo um item do carrinho", () => {
  CartPage.removeCartItem(3);
  CartPage.sumCartItems();
});

When("realizo o pagamento", () => {
  const name = faker.person.fullName()
  const email = faker.internet.email()

  PaymentPage.fillPaymentModal(name, email);
});

Then("a mensagem de sucesso deverá ser exibida", () => {
  HomePage.checkSuccessMessage();
});