/// <reference types="cypress"/> 

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/') //baseURL usado para o site ser fixo (cypress.config.js)
    });

    it('Deve selecionar um produto da lista', () => {
        //cy.get('.product-block').first().click() primeiro elemento da lista
        cy.get('.product-block').eq(3).click() //elemento especifico
        //cy.get('.products > .row').contains(Aero Daily Fitness Tee).click() // procura o nome do produto
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});