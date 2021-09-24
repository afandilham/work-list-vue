<template>
  <teleport to='#app'>
    <div class="fixed top-0 left-0 h-full w-full shadow-lg bg-gray-300 dark:bg-gray-700 opacity-90 overflow-hidden"></div>
    <div class="bg-gray-800">
      <dialog open class="fixed container max-w-md top-1/2 shadow-lg rounded-lg bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-200 z-10 overflow-hidden">
        <header class="rounded-sm">
          <h3 class="font-semibold tracking-tight p-2">{{ title }}</h3>
        </header>
        <section class="pt-3 px-2">
          <p>Please check all of inputs form, make sure that fill even with a few character.</p>
        </section>
        <menu class="flex justify-end">
          <base-button class="mt-2" @click="$emit('close')">Close</base-button>
        </menu>
      </dialog>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  emits: ['close']
}
</script>