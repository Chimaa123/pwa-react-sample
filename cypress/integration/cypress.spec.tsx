import React from "react";
before(() => {
  cy.visit("/");
});

it("have logo", () => {
  it("renders app logo", () => {
    cy.focused().should("have.class", "App-logo");
  });
});

it("renders app link", () => {
  const value = "learn react";
  cy.get('div.App').contains(value);
});


it("renders user login button", () => {
  cy.get("button")
      .contains("load data").click();
});
