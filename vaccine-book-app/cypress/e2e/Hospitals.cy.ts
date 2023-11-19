describe("Hospitals", () => {
    it("Should fetch hospitals and display", () => {
        cy.visit("/");
        cy.get(".promote-card").should("exist");
        cy.contains("Pause").should("exist");
        cy.get("video").should("have.prop", "paused", false);
        cy.wait(5000);
        cy.contains("Pause").click();
        cy.get("video").should("have.prop", "paused", true);
        cy.contains("Select your hospital").should("exist");
        cy.contains("Select your hospital").click();
        cy.wait(5000);
        cy.get("img").should("have.length.at.least", 3);
    });
});
