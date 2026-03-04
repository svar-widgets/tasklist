<script>
	import { getContext, setContext } from "svelte";
	import { Button } from "@svar-ui/svelte-core";
	import { tempID } from "@svar-ui/lib-state";
	import Task from "./Task.svelte";

	let { data: rawData, readonly = false, onchange } = $props();

	const _ = getContext("wx-i18n").getGroup("tasklist");

	//prevent associating Checkboxes with outer Field label
	setContext("wx-input-id", null);

	const data = $derived(rawData ?? []);
	let edit = $state(null);
	let editTask = $state(null);

	function openEditor() {
		edit = -1;
		editTask = { id: -1, content: "", status: 0 };
	}

	function add(content) {
		const task = {
			id: tempID(),
			content,
			status: 0,
		};

		rawData = [...data, task];
		if (onchange) {
			const res = onchange({ value: rawData, task, action: "add" });
			if (res && typeof res === "object") {
				if (res.then) {
					res.then(data => {
						updateAfter(task.id, data);
					});
				} else {
					updateAfter(task.id, res);
				}
			}
		}
	}

	function updateAfter(id, data) {
		const index = rawData.findIndex(d => d.id === id);

		const copy = [...rawData];
		copy[index] = { ...rawData[index], ...data };
		rawData = copy;
	}

	function remove(id) {
		if (edit === id) edit = null;

		rawData = rawData.filter(d => d.id !== id);
		if (id !== -1)
			onchange && onchange({ value: rawData, id, action: "delete" });
	}

	function update(id, content, status) {
		let task;
		rawData = rawData.map(d => {
			if (d.id === id) {
				task = { ...d, content, status };
				return task;
			} else return d;
		});
		edit = null;

		onchange && onchange({ value: rawData, id, action: "update", task });
	}

	function onremove(id) {
		remove(id);
	}

	function onedit(id) {
		if (!readonly) edit = id;
	}

	function onupdate({ task, content, status, next }) {
		if (task.id === -1) {
			edit = null;
			if (content) {
				add(content);
				if (next) {
					openEditor();
				}
			} else {
				remove(task.id);
			}
		} else {
			if (content) {
				if (content !== task.content || status !== task.status) {
					update(task.id, content, status);
				}
			} else {
				remove(task.id);
			}
			edit = null;
		}
	}
</script>

<div class="wx-tasks-list">
	<div class="wx-list">
		{#each data as task (task.id)}
			<Task {task} {edit} {onupdate} {onremove} {onedit} {readonly} />
		{/each}
		{#if edit === -1}
			<Task task={editTask} {edit} {onupdate} />
		{/if}
	</div>
	{#if !readonly && edit !== -1}
		<div class="wx-button">
			<Button onclick={openEditor}>{_("Add task")}</Button>
		</div>
	{/if}
</div>

<style>
	.wx-tasks-list {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.wx-button {
		width: 100%;
	}

	.wx-list {
		display: flex;
		flex-direction: column;
		margin-bottom: 4px;
		overflow-y: auto;
		flex: 1;
	}
</style>
