// referenciando o cypress:
/// <reference types="cypress"/> 

describe('Funcionalidade: login', () => {
    it('Deve fazer login com sucesso', () => {  //cenario de teste
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') //abre o link
        cy.get('#username').type('shaolin.matador.de.porco@xvideos.com') // digita o username na aba username
        cy.get('#password').type('teste123') // digita a senha na aba senha
        cy.get('.woocommerce-form > .button').click() // clica no botão de entrar. obs.: o click é um método, deve abrir e fecha parentese
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, shaolin.matador.de.porco') // testa se a frase vai estar na página
    })

})