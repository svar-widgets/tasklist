<div align="center">

# SVAR Svelte TaskList

[![npm](https://img.shields.io/npm/v/@svar-ui/svelte-tasklist.svg)](https://www.npmjs.com/package/@svar-ui/svelte-tasklist)
[![License](https://img.shields.io/github/license/svar-widgets/tasklist)](https://github.com/svar-widgets/tasklist/blob/main/license.txt)
[![npm downloads](https://img.shields.io/npm/dm/@svar-ui/svelte-tasklist.svg)](https://www.npmjs.com/package/@svar-ui/svelte-tasklist)

</div>

<div align="center">

[Documentation](https://docs.svar.dev/svelte/core/tasklist/) • [Demos](https://docs.svar.dev/svelte/core/samples-tasklist/#/base/willow)

</div>

**SVAR Svelte Tasklist** is a lightweight and intuitive Svelte UI component for managing task lists or to-do lists. It allows users to add new tasks, edit existing ones, mark tasks as completed, and remove them.

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

1. Run `yarn` to install dependencies. Note that this project is a monorepo using `yarn` workspaces, so npm will not work
2. Start the project in development mode with `yarn start`

### Run Tests

To run the test:

1. Start the test examples with:
    ```sh
    yarn start:tests
    ```
2. In a separate console, run the end-to-end tests with:
    ```sh
    yarn test:cypress
    ```
