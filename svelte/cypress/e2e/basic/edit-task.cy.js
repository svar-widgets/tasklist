context("Editing Tasks", () => {
	beforeEach(() => {
		cy.visit("/index.html");
	});

	it("should be able to edit a task by double-clicking", () => {
		const originalTaskText = "Optimize performance in Svelte applications";
		const updatedTaskText = "Submit the project proposal";

		cy.contains(".wx-task", originalTaskText).dblclick();

		cy.get(".wx-texarea")
			.should("be.visible")
			.and("have.value", originalTaskText);

		cy.get(".wx-texarea").clear().type(`${updatedTaskText}{enter}`);

		cy.get(".wx-list").should("contain", updatedTaskText);

		cy.get(".wx-list").should("not.contain", originalTaskText);
		cy.screenshot("edit-task");
	});
});
