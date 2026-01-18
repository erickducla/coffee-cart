const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
 
Given('que busco todos os cafés', () =>{
  cy.requisicaoList()
})
 