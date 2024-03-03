describe("my First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");

    cy.findByText(/home!/i);
  });
});
