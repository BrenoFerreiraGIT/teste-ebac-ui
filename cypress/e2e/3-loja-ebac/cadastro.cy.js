/// <reference types="cypress"/> 
import { faker } from '@faker-js/faker'

describe('Funcionalidade Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type('bolsonaro2026@orkut.com')
        cy.get('#reg_password').type('picamole')
        cy.get(':nth-child(4) > .button').click()
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email()) // cria um email aleatorio
        cy.get('#reg_password').type('picamole')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName()) // cria um primero nome aletorio 
        cy.get('#account_last_name').type(faker.person.lastName()) // cria um ultimo nome aleatorio
        cy.wait(5000) // espera 5 segundos, nao é uma boa pratica manter no teste, apenas para entender
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve completar o cadastro com sucesso - usando variaveis', () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome) // cria o email aleatorio com o nome já criado
        var sobrenome = faker.person.lastName()

        cy.get('#reg_email').type(email) // cria um email aleatorio
        cy.get('#reg_password').type('picamole')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome) // cria um primero nome aletorio 
        cy.get('#account_last_name').type(sobrenome) // cria um sobrenome aleatorio
        cy.wait(5000) // espera 5 segundos, nao é uma boa pratica manter no teste, apenas para entender
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });
    it.only('Deve completar o cadastro com sucesso - usando comando customizado', () => {
        cy.preCadastro(faker.internet.email(), 'picamole', faker.person.firstName(), faker.person.lastName()) //commands.js
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });
});