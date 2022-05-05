import type { ClientApi } from '@storybook/client-api';

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      storyAPI: typeof storyAPI;
      selectStory: typeof selectStory;
      visitStorybook: typeof visitStorybook;
    }
  }
}

Cypress.Commands.add('visitStorybook', visitStorybook);
function visitStorybook(): void {
  const host = Cypress.env('HOST') || 'http://localhost:5000';

  cy.visit(`${host}/iframe.html`);
}

Cypress.Commands.add('storyAPI', storyAPI);
function storyAPI(): Cypress.Chainable<ClientApi> {
  return cy
    .window()
    .then((win) => Cypress._.get(win, '__STORYBOOK_CLIENT_API__') as ClientApi);
}

Cypress.Commands.add('selectStory', selectStory);
function selectStory(kind: string, name: string): void {
  storyAPI().then((api) => {
    const store = api.store();
    const story = store.getRawStory(kind, name);

    expect(story).to.have.property('id');

    store.setSelection({ viewMode: 'story', storyId: story.id });

    cy.get(`[data-story="${story.id}"]`).should('be.visible');
  });
}
