<script>
	import Layout from "./Layout.svelte";
	import { Locale } from "wx-svelte-core";
	import { en } from "wx-tasklist-locales";

	const { ondata, onchange, value, ...props } = $props();
	const finalData = $derived(ondata && value ? ondata(value) : value);

	const handleOnchange = e => {
		e.originalValue = value;
		return onchange && onchange(e);
	};
</script>

<Locale words={en} optional={true}>
	{#await finalData}
		<Layout
			data={[]}
			readonly={true}
			{...props}
			onchange={handleOnchange}
		/>
	{:then data}
		<Layout {data} {...props} onchange={handleOnchange} />
	{/await}
</Locale>
