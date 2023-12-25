<script setup>
import { useTodosStore } from "./store/todos";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const newTodo = ref("");

const todoStore = useTodosStore();

const { filterTodos } = storeToRefs(todoStore);

const { addTodo, toggleTodo, deleteTodo ,updatefilter } = todoStore;

const callingApp = (text) => {
  addTodo(text);
  newTodo.value = "";
};

const toggle = (id) => {
  toggleTodo(id);
};
/**
 * Deletes a todo item with the given id.
 * Calls the deleteTodo() method from the todo store, passing the id.
 */
const deleteT = (id) => {
  deleteTodo(id);
};

</script>

<template>
  <main style="width: 100%;" >
    <div style="display: flex; gap: 4px; margin-bottom: 2px; align-items: center; justify-content: center; color: blue;">
  <button @click="()=>updatefilter('finished')">finished</button>
  <button @click="()=>updatefilter('unfinished')">unfinished</button>
  <button @click="()=>updatefilter('all')">all</button>

    </div>

    <div style="margin: 12px auto; display: flex; align-items: center; justify-content: center;">
      <input type="text" v-model="newTodo"  />
      <button :disabled="newTodo===''" @click="() => callingApp(newTodo)">Add</button>
    </div>

    <div v-for="todo in filterTodos" style="display: flex; row-gap: 4px; margin-bottom: 2px; align-items: center; justify-content: center;">
      <h1 style="margin: 4px 8px;" :style="todo.isFinish?'text-decoration: line-through;':''">{{ todo.text }}</h1>
      <button style="padding: 1px 8px;" @click="toggle(todo.id)"><small style="margin: 0px 1px;">Toggle</small></button>
      <button style="padding: 1px 8px; color: coral;" @click="deleteT(todo.id)"><small style="margin: 0px 1px;">Delete</small></button>
    </div>
  </main>
</template>
