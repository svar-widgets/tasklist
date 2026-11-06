<script lang="ts">
	import Layout from "./Layout.svelte";
	import { Locale } from "@svar-ui/svelte-core";
	import { en } from "@svar-ui/tasklist-locales";
	import type { TID, ITask, IChange, TChangeResult } from "../types";

	type Props = {
		value?: TID | ITask[] | Promise<ITask[]>;
		ondata?: (value: TID) => Promise<ITask[]> | ITask[];
		onchange?: (ev: IChange) => TChangeResult;
		readonly?: boolean;
	};

	const { ondata, onchange, value, ...props }: Props = $props();
	const finalData = $derived(
		ondata && value
			? ondata(value as TID)
			: (value as ITask[] | Promise<ITask[]> | undefined)
	);

	const handleOnchange = (e: Omit<IChange, "originalValue">) =>
		onchange?.({ ...e, originalValue: value as IChange["originalValue"] });
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
