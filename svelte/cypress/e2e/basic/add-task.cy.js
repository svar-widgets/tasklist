context("Adding Tasks", () => {
	beforeEach(() => {
		cy.visit("/index.html");
	});

	it("should be able to add a new task", () => {
		const newTaskText = "A brand new task";

		cy.get(".wx-list .wx-task").should("have.length", 3);

		cy.contains("button", "Add task").click();
		cy.get(".wx-texarea").type(`${newTaskText}{enter}`);

		cy.get("body").click(0, 0);

		cy.get(".wx-list .wx-task").should("have.length", 4);
		cy.get(".wx-list .wx-task").eq(3).should("contain", newTaskText);
		cy.get(".wx-list .wx-task")
			.eq(3)
			.find("input[type='checkbox']")
			.should("not.be.checked");
		cy.screenshot("add-new-task");
	});
});
