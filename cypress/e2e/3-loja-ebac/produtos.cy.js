/// <reference types="cypress"/> 
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
    });
    
    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('aether-gym-pant/')
    });

    it('Deve adicionar o produto ao carrinho', () => {
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Blue', 4)
    });

    it('Deve adicionar o produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
        })     
    });
});