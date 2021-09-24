<template>
  <base-card class="my-6">
    <template #default>
      <div v-if="todos.length > 0" class="grid grid-cols-2 gap-3">
        <todo-list
          v-for="todo in todos"
          :key="todo.id"
          :id="todo.id"
          :title="todo.title"
          :date="new Date(todo.date)"
          :priority="todo.priority">
        </todo-list>
      </div>
      <div v-else class="text-gray-800 dark:text-gray-200 flex items-center justify-center">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path></svg>
        <span class="text-xl">There are no items</span>
      </div>
    </template>
  </base-card>
</template>

<script>
import TodoList from './TodoList.vue';

export default {
  inject: ['todos'],
  components: {
    TodoList
  }
}
</script>