<script setup>
import { ref } from 'vue'

const message = ref('The different views will be shown here')
</script>

<template>
  <main>
    <h1>{{ message }}</h1>
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  max-width: 400px;
  padding: 1em;
}
</style>
