<script lang="ts">
  import { enhance } from "$app/forms";
  import { fly } from "svelte/transition";
  import Card from "./Card.svelte";

  export let id: string | number;
  export let title: string;
  export let complete: boolean;
  export let index = 0;
</script>

<div in:fly>
  <Card>
    <div class="row p-2 bg-blue-200 flex justify-between">
      <div class="flex flex-col justify-center">
        <span
          class="text-md ml-4 text-neutral-500"
          class:line-through={complete}
        >
          {title}
        </span>
      </div>

      <form method="POST" action="?/toggleTodo" use:enhance>
        <input type="hidden" value={id} name="id" />
        <button
          type="submit"
          class="p-2 border-2 rounded text-white border-teal hover:text-white hover:bg-teal-400"
        >
          Mark as {complete ? "incomplete" : "complete"}
        </button>
      </form>
    </div>
  </Card>
</div>
