context("Removing Tasks", () => {
	beforeEach(() => {
		cy.visit("/index.html");
	});

	it("should be able to remove a task", () => {
		const taskText = "Optimize performance in Svelte applications";

		cy.contains(".wx-task", taskText)
			.find(".wxi-close")
			.click({ force: true });

		cy.get(".wx-list").should("not.contain", taskText);
		cy.screenshot("remove-task-by-close-button");
	});

	it("should be able to remove a task by clearing the input", () => {
		cy.get(".wx-list .wx-task").should("have.length", 3);

		cy.get(".wx-list .wx-task").eq(0).dblclick();
		cy.get(".wx-texarea").clear();
		cy.get("body").click(0, 0);

		cy.get(".wx-list .wx-task").should("have.length", 2);
		cy.screenshot("remove-task-by-clearing-input");
	});

	it("should be able to remove a task by pressing escape", () => {
		cy.get(".wx-list .wx-task").should("have.length", 3);

		cy.get(".wx-list .wx-task").eq(0).dblclick();
		cy.get(".wx-texarea").clear().type("{esc}");

		cy.get(".wx-list .wx-task").should("have.length", 2);
		cy.screenshot("remove-task-by-escape");
	});
});
