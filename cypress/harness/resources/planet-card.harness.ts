const selectors = {
  card: 'app-planet-card',
  basicProperty: 'app-basic-property',
};

const getValue = (value: string | number) => {
  return value === 'n/a' ? '-' : value;
};

export class PlanetCardHarness {
  public static properties(planet: {
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    name: string;
  }): void {
    cy.contains(selectors.card, planet.name).within(() => {
      cy.contains(selectors.basicProperty, getValue(planet.diameter)).should('exist');
      cy.contains(selectors.basicProperty, getValue(planet.rotation_period)).should('exist');
      cy.contains(selectors.basicProperty, getValue(planet.orbital_period)).should('exist');
      cy.contains(selectors.basicProperty, getValue(planet.gravity)).should('exist');
      cy.contains(selectors.basicProperty, getValue(planet.population)).should('exist');
      cy.contains(selectors.basicProperty, getValue(planet.climate)).should('exist');
      cy.contains(selectors.basicProperty, getValue(planet.terrain)).should('exist');
      cy.contains(selectors.basicProperty, getValue(planet.surface_water)).should('exist');
    });
  }
}
