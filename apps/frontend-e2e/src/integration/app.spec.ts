describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should work', () => {
    cy.get('h1').contains('Awesome title');
  });
});
