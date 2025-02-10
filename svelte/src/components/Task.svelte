<script>
	import { getContext } from "svelte";
	import { Checkbox } from "wx-svelte-core";
	import { clickOutside } from "wx-lib-dom";

	let { task, edit, readonly, onupdate, onremove } = $props();

	const _ = getContext("wx-i18n").getGroup("tasklist");

	let textarea = $state();
	function adjustHeight() {
		textarea.style.height = textarea.scrollHeight + 2 + "px";
	}

	let content = "";
	function handleContent() {
		content = textarea.value;
		adjustHeight();
	}

	function handleStatus({ value }) {
		onupdate({
			task,
			status: value ? 1 : 0,
			content: content || task.content,
		});
	}

	function saveTask(next) {
		onupdate({ task, content: content, status: task.status, next });
	}

	function handleKeydown(e) {
		if (e.key === "Escape") {
			onupdate({ task, status: task.status, content: "" });
		} else if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			saveTask(true);
		}
	}

	$effect(() => {
		if (textarea) {
			content = textarea.value = task.content;
			textarea.focus();
			adjustHeight();
		}
	});
</script>

<div class="wx-task" class:wx-done={task.status}>
	<div class="wx-checkbox-wrapper">
		{#if edit === task.id}
			<div class="wx-icon-add"><i class="wxi-plus"></i></div>
		{:else}
			<Checkbox onchange={handleStatus} value={task.status} />
		{/if}
	</div>

	<div class="wx-wrapper">
		{#if edit === task.id}
			<textarea
				bind:this={textarea}
				class="wx-texarea"
				placeholder={_("Enter the task...")}
				use:clickOutside={saveTask}
				onkeydown={handleKeydown}
				oninput={handleContent}
			></textarea>
		{:else}
			<div class="wx-text-wrapper" data-id={task.id}>
				<span class="wx-text">{task.content}</span>
			</div>
		{/if}
	</div>

	<div class="wx-icon-close">
		{#if !readonly && edit !== task.id}
			<i class="wxi-close" onclick={() => onremove(task.id)}></i>
		{/if}
	</div>
</div>

<style>
	.wx-task {
		display: flex;
		padding: 8px 0 4px;
		height: fit-content;
	}

	.wx-task {
		border-top: 1px solid var(--wx-color-disabled);
	}

	.wx-task:last-child {
		border-bottom: 1px solid var(--wx-color-disabled);
	}

	.wx-checkbox-wrapper :global(label span:first-child:before) {
		border-radius: 50%;
	}

	.wx-task.wx-done
		.wx-checkbox-wrapper
		:global(input:checked ~ label span:first-child:before) {
		background: #00d19a;
	}

	.wx-wrapper {
		flex: 1;
		min-height: 20px;
		margin-left: 16px;
		min-height: 30px;
		height: fit-content;
		overflow: hidden;
		margin-top: -5px;
	}

	.wx-texarea {
		display: block;
		width: 100%;
		resize: none;
		outline: none;
		height: 30px;
		font-family: var(--wx-input-font-family);
		font-size: var(--wx-input-font-size);
		line-height: var(--wx-input-line-height);
		font-weight: var(--wx-input-font-weigth);
		text-align: var(--wx-input-text-align);
		color: var(--wx-input-font-color);
		border: var(--wx-input-border);
		border-radius: var(--wx-input-border-radius);
		background: var(--wx-input-background);
		padding: var(--wx-input-padding);
		box-sizing: border-box;
		word-wrap: break-word;
		overflow: hidden;
	}

	.wx-texarea:focus {
		border: var(--wx-input-border-focus);
	}

	.wx-texarea::placeholder {
		color: var(--wx-input-placeholder-color);
	}

	.wx-text-wrapper {
		padding: var(--wx-input-padding);
		border: var(--wx-input-border);
		border: 1px solid transparent;
		border-radius: 3px;
		width: 100%;
		min-height: 30px;
	}

	.wx-text {
		word-wrap: break-word;
	}

	.wx-done .wx-text {
		text-decoration: line-through;
		opacity: 0.6;
	}

	.wx-task:hover .wx-icon-close {
		opacity: 1;
	}

	.wx-icon-add {
		font-size: var(--wx-checkbox-size);
		color: var(--wx-color-font-alt);
	}

	.wx-icon-close {
		color: var(--wx-color-font-alt);
		margin-left: 8px;
		font-size: 20px;
		height: 20px;
		width: 20px;
		opacity: 0;
		transition: 0.3s linear;
	}

	.wx-icon-close .wxi-close {
		cursor: pointer;
	}

	.wx-icon-close .wxi-close:hover {
		color: var(--wx-color-danger);
	}
</style>
