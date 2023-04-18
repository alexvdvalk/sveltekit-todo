<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  import { page } from "$app/stores";
  import TodoItem from "$lib/components/TodoItem.svelte";
  import TodoForm from "$lib/components/TodoForm.svelte";

  export let data: PageData;
  export let form: ActionData;

  $: console.log("data changed", data);
  $: console.log("form changed", form);
  $: console.log("page data", $page);
</script>

<svelte:head>
  <title>To Do App</title>
  <meta name="description" content="Todo demo app made in sveltekit" />
  <meta name="keywords" content="HTML, CSS, JavaScript" />
</svelte:head>

<TodoForm />
{#each data.todos as todo}
  <TodoItem id={todo.id} complete={todo.complete} title={todo.title} />
{/each}
