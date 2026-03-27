<script>
	import { Tasklist } from "../../src/index";
	import { Segmented } from "@svar-ui/svelte-core";
	import { RestURL } from "@svar-ui/lib-data-provider";

	const url = new RestURL(
		"https://tasklist-backend.svar.dev/tasks"
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
			value={id}
			ondata={v => url.get(v)}
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
		margin: 20px;
		max-width: 768px;
		height: calc(100% - 56px);
	}
</style>
