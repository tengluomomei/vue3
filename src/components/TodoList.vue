<template>
<div class="todo-list">
    <TodoListItem 
    v-for="todo in todos" 
    :key="todo.id" 
    :todo-item="todo"
    @change-state="todo.completed = $event.target.checked"
    >
    </TodoListItem>
</div>
</template>

<script setup>
  import TodoListItem from './TodoListItem.vue';

  defineProps({
    todos: Array
  })

</script>

<style>

.todo-list {
  display: grid;
  row-gap: 14px;
}

</style>