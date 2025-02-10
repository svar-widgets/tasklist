<script>
	import { Tasklist } from "../../src/index";
	import { getData } from "../data";

	let { data } = getData();
</script>

<div>
	<div class="wrapper">
		<Tasklist value={data} />
	</div>
</div>

<style>
	.wrapper {
		margin: 20px auto;
		max-width: 768px;
		height: 100%;
	}
</style>
