<template>
  <todo-card :class="border" class="flex justify-between bg-white dark:bg-gray-800 hover:shadow-lg transition ease-in delay-75 border-l-4 rounded-lg">
    <template #default>
      <div class="todo-list__title">
        <div class="font-medium text-lg text-gray-800 dark:text-gray-200 tracking-tight">
          {{ title }}
        </div>
        <div class="font-bebas tracking-widest text-gray-500 dark:text-gray-300 text-xs pt-2">
          {{ formatDate(date) }}
        </div>
        <div class="hidden">
          {{ borderPriority(priority) }}
        </div>
      </div>
      <button class="bg-red-500 text-white rounded-full transition ease-in transform hover:scale-110" @click="removeTodo(id)">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </button>
    </template>
  </todo-card>
</template>

<script>
import TodoCard from './TodoCard.vue';

export default {
  components: { TodoCard },
  inject: ['removeTodo'],
  data() {
    return {
      border: ''
    }
  },
  props: {
    id: {
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    priority: {
      type: String,
      required: true
    },
  },
  methods: {
    formatDate(date) {
      let getDate = new Date(date).getDate();
      let getMonth = new Date(date).toLocaleString('default', { month: 'long' });
      let getYear = new Date(date).toLocaleString('default', { year: 'numeric' });

      return `${getDate}/${getMonth}/${getYear}`;
    },
    borderPriority(priority) {
      if (JSON.stringify(priority) == JSON.stringify('priority_1')) {
        this.border = 'border-red-500';
      } else if (JSON.stringify(priority) === JSON.stringify('priority_2')) {
        this.border = 'border-green-500';
      } else if (JSON.stringify(priority) === JSON.stringify('priority_3')) {
        this.border = 'border-yellow-500';
      } else if (JSON.stringify(priority) === JSON.stringify('priority_4')) {
        this.border = 'border-gray-500';
      }
    }
  },
}
</script>