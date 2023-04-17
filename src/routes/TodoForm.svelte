<script lang="ts">
  import { enhance } from "$app/forms";
  import { invalidateAll } from "$app/navigation";
  import type { SubmitFunction } from "@sveltejs/kit";

  const formHandler: SubmitFunction = (e) => {
    loading = true;
    return async ({ result }) => {
      console.log("result", result); //This is also passed back from the form action
      await invalidateAll(); // If you use a custom function here, you have to manually invalidate so the load function runs again
      loading = false;
    };
  };
  let loading = false;
</script>

{#if loading}
  <h1>Loading...</h1>
{:else}
  <form method="POST" action="?/addTodo" use:enhance={formHandler}>
    <div>
      <label for="title">Task Title</label>
      <input type="text" name="title" />
    </div>
    <div>
      <label for="complete">Complete?</label>
      <input type="checkbox" name="complete" />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid black;
    padding: 1rem;
    max-width: 300px;
    margin: 1rem;
    border-radius: 1rem;
  }
</style>
