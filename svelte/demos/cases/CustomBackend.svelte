<script>
	import { Tasklist } from "../../src/index";
	import { getData } from "../data";

	let prev = localStorage.getItem("--tasklist-demo-data");
	let data = prev ? JSON.parse(prev) : getData().data;
	let message = "";

	function callback(action, obj) {
		switch (action) {
			case "add": {
				message = `The task "${obj.task.content}" was successfully added`;
				break;
			}
			case "delete": {
				message = `The task was successfully deleted`;
				break;
			}
			case "update": {
				message = `The task was successfully updated`;
				break;
			}
		}
		localStorage.setItem("--tasklist-demo-data", JSON.stringify(obj.value));
	}
</script>

<div class="message">{message}</div>
<div>
	<div class="tasks">
		<Tasklist value={data} onchange={e => callback(e.action, e)} />
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
	.tasks {
		margin: 20px auto;
		max-width: 768px;
		height: calc(100% - 56px);
	}
</style>
