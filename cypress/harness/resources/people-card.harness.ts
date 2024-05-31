const selectors = {
  card: 'app-people-card',
  basicProperty: 'app-basic-property',
};

const getValue = (value: string | number) => {
  return value === 'n/a' ? '-' : value;
};

export class PeopleCardHarness {
  public static properties(people: {
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    name: string;
    skin_color: string;
  }): void {
    cy.contains(selectors.card, people.name).within(() => {
      cy.contains(selectors.basicProperty, getValue(people.birth_year)).should('exist');
      cy.contains(selectors.basicProperty, getValue(people.eye_color)).should('exist');
      cy.contains(selectors.basicProperty, getValue(people.gender)).should('exist');
      cy.contains(selectors.basicProperty, getValue(people.hair_color)).should('exist');
      cy.contains(selectors.basicProperty, getValue(people.height)).should('exist');
      cy.contains(selectors.basicProperty, getValue(people.mass)).should('exist');
      cy.contains(selectors.basicProperty, getValue(people.skin_color)).should('exist');
    });
  }
}
