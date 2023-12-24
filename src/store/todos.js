import { defineStore } from "pinia";

/**
 * Defines a Pinia store for managing todo items.
 *
 * Exports a function `useTodosStore` that returns the store instance.
 *
 * The store has a `state` property with the `todos` array.
 *
 * It has `actions` for mutating the `todos`:
 *
 * - `addTodo` - Add a new todo item.
 * - `toggleTodo` - Toggle the `isFinished` status of a todo item.
 */
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
    /**
     * Adds a new todo item to the store's `todos` array.
     *
     * Accepts the `text` of the new todo item.
     *
     * Generates a random `id` for the new todo.
     *
     * Sets `isFinished` to false initially.
     */
    addTodo(text) {
      if (!text) return;

      this.todos.push({
        /*  this mean UseTodosStore and in that there is todos object of array*/
        id: Math.floor(Math.random() * 100000),
        text,
        isFinish: false,
      });
    },
    /**
     * Toggles the `isFinished` status of a todo item with the given `id`.
     *
     * Finds the todo item by its `id` in the `todos` array.
     * Sets `isFinished` to the opposite of its current value.
     */
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
