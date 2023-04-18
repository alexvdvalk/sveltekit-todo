<script lang="ts">
  import { enhance } from "$app/forms";
  import { invalidateAll } from "$app/navigation";
  import Card from "$lib/components/Card.svelte";
  import type { SubmitFunction } from "@sveltejs/kit";

  let inputText = "";

  const formHandler: SubmitFunction = (e) => {
    return async ({ result }) => {
      console.log("result", result); //This is also passed back from the form action
      await invalidateAll(); // If you use a custom function here, you have to manually invalidate so the load function runs again
    };
  };
</script>

<Card>
  <form
    method="POST"
    action="?/addTodo"
    use:enhance={formHandler}
    class="flex gap-3 p-3 bg-slate-300"
  >
    <div class="grow">
      <input
        type="text"
        name="title"
        id="title"
        bind:value={inputText}
        class="grow h-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter a new task"
      />
    </div>
    <div class="flex grow-0">
      <button
        disabled={inputText.trim().length === 0}
        class="align-middle p-2 border-2 rounded text-white border-teal hover:text-white hover:bg-teal-400 disabled:bg-red-100"
        type="submit">Add Task</button
      >
    </div>
  </form>
</Card>
