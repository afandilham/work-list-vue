<template>
  <the-header></the-header>
  <the-todo></the-todo>
</template>

<script>
import TheHeader from './components/Layout/TheHeader.vue';
import TheTodo from './components/Todo/TheTodo.vue';

export default {
  components: {
    TheHeader,
    TheTodo
  },
}
</script>

<style scoped>

</style>