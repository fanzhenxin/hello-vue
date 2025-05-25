<template>
  <div id="app">
    <h1>Hello Vue 3!</h1><br/>
    <Person4 a = "哈哈" :list="personlist"/>
  </div>
  <br>
  <!-- <Person2 /> -->
</template>
<script setup lang="ts" name="App">
import { ref } from 'vue'
import { reactive } from 'vue';
import Person from './components/Person.vue';
import Person2 from './components/Person2.vue';
import Person3 from './components/Person3.vue';
import Person4 from './components/Person4.vue';
import {type Persons} from '@/types'
let personlist = reactive<Persons>([{id: 1,name: 'zhangsan', age: 18},{id: 2,name: 'lisi', age: 19},{id: 3,name: 'wangwu', age: 20}])
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