const selectors = {
  card: 'app-species-card',
  basicProperty: 'app-basic-property',
};

const getValue = (value: string | number) => {
  return value === 'n/a' ? '-' : value;
};

export class SpeciesCardHarness {
  public static properties(species: {
    average_height: string;
    average_lifespan: string;
    classification: string;
    designation: string;
    eye_colors: string;
    hair_colors: string;
    language: string;
    name: string;
    skin_colors: string;
  }): void {
    cy.contains(selectors.card, species.name).within(() => {
      cy.contains(selectors.basicProperty, getValue(species.average_height)).should('exist');
      cy.contains(selectors.basicProperty, getValue(species.average_lifespan)).should('exist');
      cy.contains(selectors.basicProperty, getValue(species.classification)).should('exist');
      cy.contains(selectors.basicProperty, getValue(species.designation)).should('exist');
      cy.contains(selectors.basicProperty, getValue(species.eye_colors)).should('exist');
      cy.contains(selectors.basicProperty, getValue(species.hair_colors)).should('exist');
      cy.contains(selectors.basicProperty, getValue(species.language)).should('exist');
      cy.contains(selectors.basicProperty, getValue(species.skin_colors)).should('exist');
    });
  }
}
