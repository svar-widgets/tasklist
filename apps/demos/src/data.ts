import type { ITask } from "@svar-ui/svelte-tasklist";

export function getData(): { data: ITask[] } {
	const data: ITask[] = [
		{
			id: 7,
			content: "Optimize performance in Svelte applications",
			status: 1,
		},
		{
			id: 8,
			content:
				"Work with API requests and data handling in Svelte applications",
			status: 0,
		},
		{
			id: 9,
			content: "Complete the project proposal for the upcoming deadline",
			status: 0,
		},
	];

	return {
		data,
	};
}
