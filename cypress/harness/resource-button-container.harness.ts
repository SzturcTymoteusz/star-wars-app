const selectors = {
  resourceToggleButton: 'mat-button-toggle',
  resourceSelectedIcon: 'mat-pseudo-checkbox',
};

export class ResourceButtonContainerHarness {
  public static isSelected(resource: string) {
    cy.contains(selectors.resourceToggleButton, resource).within(() =>
      cy.get(selectors.resourceSelectedIcon).should('exist')
    );
  }

  public static select(resource: string) {
    cy.contains(selectors.resourceToggleButton, resource).click();
  }
}
