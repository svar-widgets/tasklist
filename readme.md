<div align="center">

# SVAR Svelte Tasklist

[![npm](https://img.shields.io/npm/v/@svar-ui/svelte-tasklist.svg)](https://www.npmjs.com/package/@svar-ui/svelte-tasklist)
[![License](https://img.shields.io/github/license/svar-widgets/tasklist)](https://github.com/svar-widgets/tasklist/blob/main/license.txt)
[![npm downloads](https://img.shields.io/npm/dm/@svar-ui/svelte-tasklist.svg)](https://www.npmjs.com/package/@svar-ui/svelte-tasklist)

</div>

<div align="center">

[Documentation](https://docs.svar.dev/svelte/core/tasklist/) • [Demos](https://docs.svar.dev/svelte/core/samples-tasklist/#/base/willow)

</div>

**SVAR Tasklist** is a lightweight and intuitive Svelte UI component for managing task lists or to-do lists. It allows users to add new tasks, edit existing ones, mark tasks as completed, and remove them. Light and dark skins are available.

<div align="center">

<img src="https://svar.dev/images/github/github-tasklist.png" alt="SVAR Svelte TaskList" style="width: 700px;">

</div>

### How to Use

To use the widget, simply import the package and include the component in your Svelte file:

```svelte
<script>
	import { Tasklist } from "@svar-ui/svelte-tasklist";

	const value = [];
</script>

<Tasklist {value} />
```

### How to Modify

Typically, you don't need to modify the code. However, if you wish to do so, follow these steps:

1. Install [vite-plus](https://vite.plus) (`curl -fsSL https://vite.plus | bash` on Mac/Linux, `irm https://vite.plus/ps1 | iex` on Windows). The project uses `pnpm` workspaces under the hood, so plain `npm` will not work.
2. Run `vp i` from the project root to install dependencies.
3. Run `vp run build` to build all packages.
4. Start the demo app in development mode with `vp run start`.
