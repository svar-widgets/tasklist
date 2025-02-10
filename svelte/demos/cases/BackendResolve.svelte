<script>
	import { Tasklist } from "../../src/index";
	import { Segmented } from "wx-svelte-core";
	import { RestURL } from "wx-lib-data-provider";

	const url = new RestURL(
		"https://master--svar-tasklist-go--dev.webix.io/tasks"
	);

	let id = $state(1);
	const options = [
		{ id: 1, label: "Work" },
		{ id: 2, label: "Rest" },
	];
</script>

<div>
	<div class="toolbar">
		<Segmented bind:value={id} {options} />
	</div>
	<div class="tasks">
		<Tasklist
			{url}
			value={id}
			ondata={() => url.get(id)}
			onchange={({ action, task, id, originalValue: v }) =>
				url.path(v).save(action, task, id)}
		/>
	</div>
</div>

<style>
	.toolbar {
		height: 56px;
		padding: 12px;
	}
	.tasks {
		margin: 20px auto;
		max-width: 768px;
		height: calc(100% - 56px);
	}
</style>
