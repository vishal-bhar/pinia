<script setup>
import { useTodosStore } from "./store/todos";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const newTodo = ref("");

const todoStore = useTodosStore();

const { todos } = storeToRefs(todoStore);

const { addTodo, toggleTodo, deleteTodo  } = todoStore;

/**
 * callingApp is a function that takes in a text parameter.
 * It calls the addTodo function, passing the text as a parameter to add a new todo item.
 * It also resets the newTodo ref by setting its value to an empty string.
 *
 * This allows creating a new todo item from the user input in the text box,
 * and clearing the input after adding.
 */
const callingApp = (text) => {
  addTodo(text);
  newTodo.value = "";
};
/**
 * Toggles the completed state of a todo item with the given id.
 * Calls the toggleTodo() method from the todo store, passing the id.
 */
const toggle = (id) => {
  toggleTodo(id);
};
const deleteT = (id) => {
  deleteTodo(id);
};

</script>

<template>
  <main style="width: 100%;" >
    <div style="margin: 12px auto; display: flex; align-items: center; justify-content: center;">
      <input type="text" v-model="newTodo"  />
      <button :disabled="newTodo===''" @click="() => callingApp(newTodo)">Add</button>
    </div>

    <div v-for="todo in todos" style="display: flex; row-gap: 4px; margin-bottom: 2px; align-items: center; justify-content: center;">
      <h1 style="margin: 4px 8px;" :style="todo.isFinish?'text-decoration: line-through;':''">{{ todo.text }}</h1>
      <button style="padding: 1px 8px;" @click="toggle(todo.id)"><small style="margin: 0px 1px;">Toggle</small></button>
      <button style="padding: 1px 8px; color: coral;" @click="deleteT(todo.id)"><small style="margin: 0px 1px;">Delete</small></button>
    </div>
  </main>
</template>
