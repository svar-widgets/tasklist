context("Checking/Unchecking Tasks", () => {
	beforeEach(() => {
		cy.visit("/index.html");
	});

	it("should be able to check and uncheck a task", () => {
		const taskText =
			"Complete the project proposal for the upcoming deadline";

		cy.contains(".wx-task", taskText).as("taskItem");

		cy.get("@taskItem")
			.find('input[type="checkbox"]')
			.click({ force: true });
		cy.get("@taskItem").find('input[type="checkbox"]').should("be.checked");

		cy.get("@taskItem")
			.find('input[type="checkbox"]')
			.click({ force: true });
		cy.get("@taskItem")
			.find('input[type="checkbox"]')
			.should("not.be.checked");
		cy.screenshot("check-uncheck-task");
	});
});
