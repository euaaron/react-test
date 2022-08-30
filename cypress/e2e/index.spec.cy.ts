describe('index spec', () => {
  it('should connect to the page', () => {
    cy.visit('http://localhost:3000').contains('Welcome to Next.js')
  })
})
