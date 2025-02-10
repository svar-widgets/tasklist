<script>
	import { Tasklist } from "../../src/index";
	import { RestURL } from "wx-lib-data-provider";

	const url = new RestURL(
		"https://master--svar-tasklist-go--dev.webix.io/tasks/1"
	);
	let value = url.get();
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
		margin: 20px auto;
		max-width: 768px;
		height: calc(100% - 56px);
	}
</style>
