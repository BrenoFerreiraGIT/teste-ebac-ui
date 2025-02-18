// referenciando o cypress:
/// <reference types="cypress"/> 

describe('Funcionalidade: login', () => { 
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') //abre o link antes de cada teste
    });
    afterEach(() => { //depois de cada teste
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {  //cenario de teste
        cy.get('#username').type('shaolin.matador.de.porco@xvideos.com') // digita o username na aba username
        cy.get('#password').type('teste123') // digita a senha na aba senha
        cy.get('.woocommerce-form > .button').click() // clica no botão de entrar. obs.: o click é um método, deve abrir e fecha parentese
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, shaolin.matador.de.porco') // testa se a frase vai estar na página
    })
    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => { //se eu quiser rodar somente esse teste: it.only
        cy.get('#username').type('jaodobalao@clickjogos.com') 
        cy.get('#password').type('teste123') 
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should('exist') //outro exemplo de validação
    });
    it('Deve exibir mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('shaolin.matador.de.porco@xvideos.com') 
        cy.get('#password').type('teste') 
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail shaolin.matador.de.porco@xvideos.com está incorreta. Perdeu a senha?')
    });
})