/// <reference types="cypress" />

context('Cypress.Commands', () => {
  beforeEach(() => {
    cy.request('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
  })


  it('Revisemos que todo este ok', () => {
    Cypress.Commands.add('console', {
      prevSubject: true,
    }, (subject, method) => {
    
      // the previous subject is automatically received
      // and the commands arguments are shifted

      // allow us to change the console method used
      method = method || 'log'

      // log the subject to the console
      // @ts-ignore TS7017
      console[method]('The subject is', subject)

      // whatever we return becomes the new subject
      // we don't want to change the subject so
      // we return whatever was passed in
      return subject
    })

    // @ts-ignore TS2339
    
  })
})
