/// <reference types="cypress" />
import 'cypress-mochawesome-reporter/register';

describe('Automation Exercise', () => {
    
    it('Cadastrar um usuário', () => {
        const timestamp = new Date().getTime()

        cy.visit('https://automationexercise.com')
        cy.get('a[href="/login"]').click()
        cy.get('[data-qa="signup-name"]').type("Test Name")
        cy.get('[data-qa="signup-email"]').type(`test-email-${timestamp}@test.com`)
        cy.contains('button', 'Signup').click()
        cy.get('input[type=radio]').check('Mrs')
        cy.get('input[type=password]').type('12345', { log: false } )
        cy.get('[data-qa=days]').select('7')
        cy.get('[data-qa=months]').select('October')
        cy.get('[data-qa=years]').select('1994')
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
        cy.get('[data-qa="first_name"]').type('Test name')
        cy.get('[data-qa="last_name"]').type('Test surname')
        cy.get('[data-qa="company"]').type('Test company')
        cy.get('[data-qa="address"]').type('Test Address')
        cy.get('[data-qa="address2"]').type('Test Address 2')
        cy.get('[data-qa="country"]').select("United States")
        cy.get('[data-qa="state"]').type('Test State')
        cy.get('[data-qa="city"]').type('Test city')
        cy.get('[data-qa="zipcode"]').type('Test zipcode')
        cy.get('[data-qa="mobile_number"]').type('Test number')
        cy.get('[data-qa="create-account"]').click()


        cy.url().should('include', 'account_created')
        




    });


});