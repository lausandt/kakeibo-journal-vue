<script setup>
import { ref } from 'vue'

const title = ref('Kakeibo Journal')
</script>

<template>
  <header>
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Instructions</li>
        <li>Login</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  margin: auto;
  padding: 20px;
  color: antiquewhite;
  background-color: #17c63a;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

header .title {
  font-size: 1em;
  margin: auto;
}

nav {
  margin: auto;
}

nav ul {
  list-style: none;
}

nav li {
  display: inline-block;
  padding-left: 1em;
  font-size: 1.5em;
}

@media screen and (max-width: 700px) {
  header {
    flex-direction: column;
  }
  header .title {
    padding-bottom: 0.5em;
  }
}
</style>
