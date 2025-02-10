<script>
	import { getContext } from "svelte";
	import { Button } from "wx-svelte-core";
	import { delegateClick } from "wx-lib-dom";
	import { tempID } from "wx-lib-state";
	import Task from "./Task.svelte";

	let { data: rawData, readonly = false, onchange } = $props();

	const _ = getContext("wx-i18n").getGroup("tasklist");

	const data = $derived(rawData ?? []);
	let edit = $state(null);
	let editTask = $state(null);

	function openEditor() {
		edit = -1;
		editTask = { id: -1, content: "", state: false };
	}

	function add(content) {
		const task = {
			id: tempID(),
			content,
			state: false,
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
			if (content) update(task.id, content, status);
			else remove(task.id);
			edit = null;
		}
	}

	const bodyClickHandlers = {
		dblclick: id => {
			if (!readonly) edit = id;
		},
	};
</script>

<div class="wx-tasks-list">
	<div class="wx-list" use:delegateClick={bodyClickHandlers}>
		{#each data as task (task.id)}
			<Task {task} {edit} {onupdate} {onremove} {readonly} />
		{/each}
		{#if edit === -1}
			<Task task={editTask} {edit} {onupdate} {onremove} />
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
