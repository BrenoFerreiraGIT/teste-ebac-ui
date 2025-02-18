/// <reference types="cypress"/> 
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
    });

    it.only('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
    });
    
    it('Deve visitar a pagina do produto', () => {
        
    });

    it('Deve adicionar o produto ao carrinho', () => {
        
    });
});