<template>
  <base-dialog v-if="isInvalid" title="Input Invalid" @close="confirmError"></base-dialog>
  <base-card class="mt-6">
    <template #default>
      <form @submit.prevent="submitTodo">
        <div class="py-2">
          <input class="w-full p-2 rounded-lg shadow-sm border-2 border-purple-500 outline-none text-sm" type="text" name="title" id="title" placeholder="Title" v-model="title">
        </div>
        <div class="py-2">
          <input class="w-full p-2 rounded-lg shadow-sm border-2 border-purple-500 outline-none text-sm" type="date" name="date" id="date" placeholder="Date" v-model="date">
        </div>
        <div id="prioritize" class="my-6 grid md:grid-cols-2 sm:grid-cols-1 gap-4">
          <todo-card class="bg-white dark:bg-gray-800 border-2 dark:border-gray-800 focus-within:border-red-500 dark:focus-within:border-red-500 rounded-sm">
            <template #default>
              <label for="important" class="cursor-pointer">
                <div class="flex justify-between">
                  <span class="font-bebas text-2xl">Important and Urgent / Do</span>
                  <input type="radio" name="prioritize" id="important" value="priority_1" v-model="priority">
                </div>
                <p class="text-xs pt-3">Urgent and important tasks are crises with due dates.</p>
                <p class="text-xs pt-3"><b>Do</b> these tasks first. They require your immediate attention.</p>
              </label>
            </template>
          </todo-card>

          <todo-card class="bg-white dark:bg-gray-800 border-2 dark:border-gray-800 focus-within:border-green-500 dark:focus-within:border-green-500 rounded-sm">
            <template #default>
              <label for="importantNotUrgent" class="cursor-pointer">
                <div class="flex justify-between">
                  <span class="font-bebas text-2xl">Important and not Urgent / Schedule</span>
                  <input type="radio" name="prioritize" id="importantNotUrgent" value="priority_2" v-model="priority" checked>
                </div>
                <p class="text-xs pt-3">Urgent and important tasks are crises with due dates.</p>
                <p class="text-xs pt-3"><b>Schedule</b> these tasks to do later.</p>
              </label>
            </template>
          </todo-card>
          
          <todo-card class="bg-white dark:bg-gray-800 border-2 dark:border-gray-800 focus-within:border-yellow-500 dark:focus-within:border-yellow-500 rounded-sm">
            <template #default>
              <label for="notImportantButUrgent" class="cursor-pointer">
                <div class="flex justify-between">
                  <span class="font-bebas text-2xl">Not Important but Urgent / Deledate</span>
                  <input type="radio" name="prioritize" id="notImportantButUrgent" value="priority_3" v-model="priority">
                </div>
                <p class="text-xs pt-3">Tasks that fall in this quadrant are nearly always interruptions from your preferred course.</p>
                <p class="text-xs pt-3"><b>Delegate</b> these tasks to others.</p>
              </label>
            </template>
          </todo-card>

          <todo-card class="bg-white dark:bg-gray-800 border-2 dark:border-gray-800 focus-within:border-gray-500 dark:focus-within:border-gray-500 rounded-sm">
            <template #default>
              <label for="notImportantNotUrgent" class="cursor-pointer">
                <div class="flex justify-between">
                  <span class="font-bebas text-2xl">Not Important and not Urgent / Delete</span>
                  <input type="radio" name="prioritize" id="notImportantNotUrgent" value="priority_4" v-model="priority">
                </div>
                <p class="text-xs pt-3">These tasks aren’t pressing, nor do they help you reach your long-term goals.</p>
                <p class="text-xs pt-3"><b>Delete</b> these tasks from your schedule.</p>
              </label>
            </template>
          </todo-card>
        </div>
        <base-button class="w-full mt-2">
          <template #default>
            Submit
          </template>
        </base-button>
      </form>
    </template>
  </base-card> 
</template>

<script>
import TodoCard from './TodoCard.vue';

export default {
  components: {
    TodoCard
  },
  inject: ['todos', 'addTodo'],
  data() {
    return {
      isInvalid: false,
      title: '',
      date: '',
      priority: ''
    }
  },
  methods: {
    submitTodo() {
      const newTodo = {
        id: new Date().toISOString(),
        title: this.title,
        date: this.date,
        priority: this.priority
      };

      if (
        this.title.trim() === '' ||
        this.date.trim() === '' ||
        this.priority.trim() === '' 
      ) {
        this.isInvalid = true;
        return;
      }

      this.addTodo(newTodo);
      localStorage.setItem('todos', JSON.stringify(this.todos));

      this.title = '';
      this.date = '';
    },
    confirmError() {
      this.isInvalid = false;
    }
  },  
}
</script>