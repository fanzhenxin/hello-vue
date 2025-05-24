<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
  </div>
  <br>
  <Person />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { reactive } from 'vue';
import Person from './components/Person.vue';
</script>
<style scoped>
  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
    /* margin-top: 60px;}  */
</style>