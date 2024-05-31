const selectors = {
  button: 'app-play-button-container button',
};

export class PlayButtonContainerHarness {
  public static play(): void {
    cy.get(selectors.button).click();
  }
}
