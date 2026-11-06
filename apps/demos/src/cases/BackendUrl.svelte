<script lang="ts">
	import { Tasklist, type ITask } from "@svar-ui/svelte-tasklist";
	import { RestURL } from "@svar-ui/lib-data-provider";

	const url = new RestURL<any, Partial<ITask>>(
		"https://tasklist-backend.svar.dev/tasks/1"
	);
	let value: Promise<ITask[]> = url.get();
</script>

<div>
	<div class="tasks">
		<Tasklist
			{value}
			onchange={({ action, task, id }) => url.save(action, task, id)}
		/>
	</div>
</div>

<style>
	.tasks {
		margin: 20px;
		max-width: 768px;
		height: calc(100% - 56px);
	}
</style>
