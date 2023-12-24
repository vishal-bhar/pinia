import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  /**
   * The state for the Todos store.
   *
   * Defines the initial state value as a function that returns an object.
   *
   * The state object contains a `todos` array property to store the todo items.
   *
   * Initializes with a sample todo item for demonstration.
   */
  state: () => ({
    todos: [
      {
        id: 1,
        text: "clean room",
        isFinish: false,
      },
    ],
  }),
  // this will be the action
  actions: {
    addTodo(text) {
      if (!text) return;

      this.todos.push({
        /*  this mean UseTodosStore and in that there is todos object of array*/
        id: Math.floor(Math.random() * 100000),
        text,
        isFinish: false,
      });
    },

    toggleTodo(id) {
      const todo = this.todos.find((t) => t.id === id);
      if(todo) todo.isFinish = !todo.isFinish;
    },

    /**
     * Deletes a todo item from the store's `todos` array.
     *
     * Accepts the `id` of the todo item to delete.
     *
     * Finds the todo item by its `id` and removes it from the `todos` array.
     */
    deleteTodo(id) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
});
