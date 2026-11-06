<script lang="ts">
	import { Tasklist } from "@svar-ui/svelte-tasklist";
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
		margin: 20px;
		max-width: 768px;
		height: 100%;
	}
</style>
