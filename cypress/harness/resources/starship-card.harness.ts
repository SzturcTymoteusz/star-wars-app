const selectors = {
  card: 'app-starship-card',
  basicProperty: 'app-basic-property',
};

const getValue = (value: string) => {
  return value === 'n/a' ? '-' : value;
};

export class StarshipCardHarness {
  public static properties(starship: {
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    crew: string;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    starship_class: string;
  }): void {
    cy.contains(selectors.card, starship.name).within(() => {
      cy.contains(selectors.basicProperty, getValue(starship.MGLT)).should('exist');
      cy.contains(selectors.basicProperty, getValue(starship.cargo_capacity)).should('exist');
      cy.contains(selectors.basicProperty, getValue(starship.consumables)).should('exist');
      cy.contains(selectors.basicProperty, getValue(starship.cost_in_credits)).should('exist');
      cy.contains(selectors.basicProperty, getValue(starship.crew)).should('exist');
      cy.contains(selectors.basicProperty, getValue(starship.hyperdrive_rating)).should('exist');
      cy.contains(selectors.basicProperty, getValue(starship.length)).should('exist');
      cy.contains(selectors.basicProperty, getValue(starship.manufacturer)).should('exist');
      cy.contains(selectors.basicProperty, getValue(starship.max_atmosphering_speed)).should(
        'exist'
      );
      cy.contains(selectors.basicProperty, getValue(starship.model)).should('exist');
      cy.contains(selectors.basicProperty, getValue(starship.passengers)).should('exist');
      cy.contains(selectors.basicProperty, getValue(starship.starship_class)).should('exist');
    });
  }
}
