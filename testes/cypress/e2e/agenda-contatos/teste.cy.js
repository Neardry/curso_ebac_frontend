/// <reference types="cypress" />

describe("Testes de ação de user", () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app');
    })
    it("Deve fazer a inclusão de um contato", () => {
        cy.get('input[type="text"]').type('Bruno gameplays');
        cy.get('input[type="email"]').type('brunaogameplays123@gmail.com');
        cy.get('input[type="tel"]').type('51 11111-1111{enter}');
        cy.log('concluído');
    })

    it("Deve fazer a alteração de um contato", () => {
        cy.get('.edit').first().click();
        cy.get('input[type="text"]').clear().type('Teste');
        cy.get('.alterar').click();
        cy.get('.sc-eDDNvR li').first().should('contain', 'Teste');
        cy.log('concluído');
    })

    it("Deve fazer a remoção do segundo contato na lista", () => {
        cy.get('.contato .delete').eq(1).click();
        cy.log('concluído')
    })
})