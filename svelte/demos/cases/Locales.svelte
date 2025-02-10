<script>
	import { Locale, Segmented } from "wx-svelte-core";
	import { Tasklist } from "../../src/index";
	import { getData } from "../data";

	import { de, cn } from "wx-tasklist-locales";
	import { de as deCore, cn as cnCore } from "wx-core-locales";

	const { data } = getData();

	const langs = [
		{ id: "en", label: "EN" },
		{ id: "de", label: "DE" },
		{ id: "cn", label: "CN" },
	];
	let lang = $state("en");
</script>

<div class="toolbar">
	<Segmented options={langs} bind:value={lang} />
</div>
<div style="margin: auto; max-width: 700px; margin-top: 40px;">
	{#if lang === "de"}
		<Locale words={{ ...de, deCore }}>
			<Tasklist value={data} />
		</Locale>
	{:else if lang === "cn"}
		<Locale words={{ ...cn, cnCore }}>
			<Tasklist value={data} />
		</Locale>
	{:else}
		<Tasklist value={data} />
	{/if}
</div>

<style>
	.toolbar {
		margin: 20px;
	}
</style>
