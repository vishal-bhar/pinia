import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
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
    toggleTodo(id){
        const todo = this.todos.find(t=>t.id===id)
        todo.isFinish = !todo.isFinish
    }
  },
});
