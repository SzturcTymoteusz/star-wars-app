const selectors = {
  card: 'app-vehicle-card',
  basicProperty: 'app-basic-property',
};

const getValue = (value: string) => {
  return value === 'n/a' ? '-' : value;
};

export class VehicleCardHarness {
  public static properties(vehicle: {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    crew: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    vehicle_class: string;
  }): void {
    cy.contains(selectors.card, vehicle.name).within(() => {
      cy.contains(selectors.basicProperty, getValue(vehicle.cargo_capacity)).should('exist');
      cy.contains(selectors.basicProperty, getValue(vehicle.consumables)).should('exist');
      cy.contains(selectors.basicProperty, getValue(vehicle.cost_in_credits)).should('exist');
      cy.contains(selectors.basicProperty, getValue(vehicle.crew)).should('exist');
      cy.contains(selectors.basicProperty, getValue(vehicle.manufacturer)).should('exist');
      cy.contains(selectors.basicProperty, getValue(vehicle.max_atmosphering_speed)).should(
        'exist'
      );
      cy.contains(selectors.basicProperty, getValue(vehicle.model)).should('exist');
      cy.contains(selectors.basicProperty, getValue(vehicle.passengers)).should('exist');
      cy.contains(selectors.basicProperty, getValue(vehicle.vehicle_class)).should('exist');
    });
  }
}
