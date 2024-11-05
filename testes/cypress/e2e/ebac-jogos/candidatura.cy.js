/// <reference types="cypress"/>

describe('Testes para a pagina de cadidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
    })
    it('Deve levar o user até a pag', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Bruno Portela')
        cy.get('input[name="email"]').type('brunoasdfasfd@gmail.com')
        cy.get('input[name="telefone"]').type('11 13456789')
        cy.get('input[name="endereco"]').type('rua jeste, bairro cypress, SP')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')

        cy.get('.Aplicacao_button__tw2AE').click()
        
    });
})