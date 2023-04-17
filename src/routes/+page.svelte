<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";
  import TodoForm from "./TodoForm.svelte";
  import { page } from "$app/stores";

  export let data: PageData;
  export let form: ActionData;

  $: console.log("data changed", data);
  $: console.log("form changed", form);
  $: console.log("page data", $page);
</script>

<TodoForm />
{#each data.todos as todo}
  <div class="row">
    <span>
      {todo.title}
    </span>
    <form method="POST" action="?/toggleTodo" use:enhance>
      <input type="hidden" value={todo.id} name="id" />
      <button type="submit">
        {todo.complete ? "Mark as todo" : "Mark as done"}
      </button>
    </form>
  </div>
{/each}

<style>
  div {
    border: 1px solid black;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border-radius: 1rem;
  }
</style>
