<template>
  <div id="header" class="py-12 container max-w-3xl mx-auto grid justify-items-center">
    <h1 class="text-center text-gray-200 uppercase font-semibold font-bebas tracking-widest">Work list</h1>
    <button id="changeTheme" class="shadow-md transform hover:-translate-y-0.5 transition-all mr-4 mt-2 rounded-full" @click="changeTheme">
      <svg class="w-9 h-9 p-1 text-gray-200 dark:text-gray-800 bg-gray-800 dark:bg-gray-200 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    changeTheme() {
      if (localStorage.theme === "light") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } 
    }
  },
  created() {
    if (localStorage.theme === null) {
      return;
    } else {
      document.documentElement.classList.add(localStorage.getItem("theme"));
    }
  }
}
</script>