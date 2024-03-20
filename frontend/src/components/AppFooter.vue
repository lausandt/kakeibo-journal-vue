<script setup>
import { ref } from 'vue'

const footerMessage = ref('A Peckish Salty Production')
</script>

<template>
  <footer>
    <h4>{{ footerMessage }}</h4>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  border-top: 1px solid #0d8725;
  padding: 10px;
}
</style>
