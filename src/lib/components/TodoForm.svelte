<script lang="ts">
  import { enhance } from "$app/forms";
  import Card from "$lib/components/Card.svelte";
</script>

<Card>
  <form
    method="POST"
    action="?/addTodo"
    use:enhance
    class="flex gap-3 p-3 bg-slate-300"
  >
    <div class="grow">
      <input
        type="text"
        name="title"
        id="title"
        class="grow h-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter a new task"
      />
    </div>
    <div class="flex grow-0">
      <button
        class="align-middle p-2 border-2 rounded text-white border-teal hover:text-white hover:bg-teal-400 disabled:bg-red-100"
        type="submit">Add Task</button
      >
    </div>
  </form>
</Card>
