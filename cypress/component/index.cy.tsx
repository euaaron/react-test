import Home from '../../pages/index';

describe('index.cy.ts', () => {
  it('should mount Home component', () => {
    cy.mount(<Home />);
  })
})
