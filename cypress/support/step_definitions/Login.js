import {Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from "../../pageObjects/login/LoginPage";

Given('The user is on the login page', () => {
    cy.visit(Cypress.env('url'))
});
