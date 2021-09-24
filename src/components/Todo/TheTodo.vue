<template>
  <todo-nav>
    <base-button
      @click="setSelectedNav('todo-form')"
      class="flex">
      <template #default>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </template>
    </base-button>
    <base-button class="ml-4"
      @click="setSelectedNav('todo-stored')">
      <template #default>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
      </template>
    </base-button>
  </todo-nav>
  <keep-alive>
    <component :is="SelectedNav"></component>
  </keep-alive>
</template>

<script>
import TodoNav from './TodoNav.vue';
import TodoForm from './TodoForm.vue';
import TodoStored from './TodoStored.vue';

export default {
  components: {
    TodoNav,
    TodoForm,
    TodoStored
  },
  data() {
    return {
      SelectedNav: 'todo-form',
      todos: []
    }
  },
  provide() {
    return {
      todos: this.todos,
      addTodo: this.addTodo,
      removeTodo: this.removeTodo
    }
  },
  methods: {
    setSelectedNav(cmp) {
      this.SelectedNav = cmp;
    },
    addTodo(todoData) {
      this.todos.unshift(todoData);
      this.SelectedNav = 'todo-stored';
    },
    removeTodo(todoId) {
      let removeIndex = this.todos.findIndex(todo => todo.id == todoId);
      this.todos.splice(removeIndex, 1);

      let removeData = this.todos.filter(todo => todo.id != todoId);
      console.log(localStorage.setItem('todos', JSON.stringify(removeData)));
    }
  },
  mounted() {
    let data = JSON.parse(localStorage.getItem('todos'));
    if (data === null || data.length == 0 ) {
      return;
    } else {
      return this.todos.push(...data);
    }
  }
}
</script>