const selectors = {
  card: 'app-film-card',
  basicProperty: 'app-basic-property',
};

const getValue = (value: string | number) => {
  return value === 'n/a' ? '-' : value;
};

export class FilmCardHarness {
  public static properties(film: {
    producer: string;
    title: string;
    episode_id: number;
    director: string;
    release_date: string;
  }): void {
    cy.contains(selectors.card, film.title).within(() => {
      cy.contains(selectors.basicProperty, getValue(film.producer)).should('exist');
      cy.contains(selectors.basicProperty, getValue(film.episode_id)).should('exist');
      cy.contains(selectors.basicProperty, getValue(film.director)).should('exist');
      cy.contains(selectors.basicProperty, getValue(film.release_date)).should('exist');
    });
  }
}
