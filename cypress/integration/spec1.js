/// <reference types="cypress" />

describe('Example site', () => {
  it('loads', { tags: 'circleci' }, () => {
    cy.visit('/')
    cy.contains('h1', 'text-workshop-ci-example').should('be.visible')
  })
})
