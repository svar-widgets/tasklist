<script>
	import { Tasklist } from "../../src/index";
	import { getData } from "../data";

	const { data } = getData();
	let message = $state("");

	function onchange({ action, task, id }) {
		switch (action) {
			case "add":
				message = `New task: "${task.content}" was added `;
				break;
			case "update":
				message = `Task with id: ${task.id} was updated `;
				break;
			case "delete":
				message = `Task with id: ${id} was deleted `;
				break;
		}
	}
</script>

<div class="message">{message}</div>
<div>
	<div class="wrapper">
		<Tasklist value={data} {onchange} />
	</div>
</div>

<style>
	.message {
		padding: 5px 10px;
		background-color: #eee;
		color: #444;
		line-height: 33px;
		height: 40px;
	}
	.wrapper {
		margin: 20px auto;
		max-width: 768px;
		height: 100%;
	}
</style>
