<template>
  <base-card>
    <template #default>
      <div class="flex justify-between">
        <div class="date flex flex-col">
          <h2 class="text-gray-800 dark:text-gray-200 font-medium">{{ getWeek }}, <span class="text-gray-500 dark:text-gray-400">{{ getDate }}</span></h2>
          <h4 class="pt-2 text-gray-500 dark:text-gray-400">{{ getMonth }}</h4>
        </div>
        <div class="flex items-end">
          <slot></slot>
        </div>
      </div>
    </template>
  </base-card>
</template>

<script>
export default {
  computed: {
    getDate() {
      return new Date().getDate();
    },
    getWeek() {
      return new Date().toLocaleString('default', { weekday: 'long' });
    },
    getMonth() {
      return new Date().toLocaleString('default', { month: 'long' });
    },
  },
}
</script>