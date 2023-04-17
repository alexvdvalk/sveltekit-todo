import type { PageServerLoad, Actions } from "./$types";

let todos = [
  {
    id: "1",
    title: "Wake up",
    complete: true,
  },
  {
    id: "2",
    title: "Do list",
    complete: true,
  },
  {
    id: "3",
    title: "do work",
    complete: false,
  },
];

export const load = (async () => {
  return { todos };
}) satisfies PageServerLoad;

export const actions = {
  toggleTodo: async (event) => {
    const data = await event.request.formData();
    const id = data.get("id");

    let todo = todos.find((i) => i.id === id);
    if (todo) {
      todo.complete = !todo.complete;
    }
    return "this return is added to the 'form' variable in the page.svelte file. very useful for sending validation errors. It's also added to the $page store so you can access it any component!";
  },
  addTodo: async (event) => {
    const data = await event.request.formData();
    const title = (data.get("title") as string) || "No title";
    const complete = !!data.get("complete");
    const id = "" + Math.random();
    // Emulate a 'loading' state
    await new Promise((r) => setTimeout(r, 2000));

    todos.push({
      id,
      title,
      complete,
    });
    return "this return is added to the 'form' variable in the page.svelte file. very useful for sending validation errors. It's also added to the $page store so you can access it any component!";
  },
} satisfies Actions;
