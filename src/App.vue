<template>
  <div id="app">
    <h1>Hello Vue 3!</h1><br/>
    <Person4 a = "哈哈" :list="personlist"/>
  </div>
  <br>
  <!-- <Person2 /> -->
   <!-- 导航区 -->
   <div class="nav">
    <RouterLink to="/" active-class="active">首页</RouterLink>
    <RouterLink to="/person/person2?a=哈哈&b=嘿嘿" active-class="active">人员管理</RouterLink>
    <RouterLink to="/person2" active-class="active">人员管理2</RouterLink>
    <RouterLink :to="`/person3/person2?id=${personlist}`" active-class="active">人员管理3</RouterLink>
    <RouterLink :to="{ path: '/person2', query: { a: '哈哈', b: '嘿嘿' } }" active-class="active">人员管理2</RouterLink>
    <RouterLink :to="{ path: '/person3' }" active-class="active">人员管理3</RouterLink>
    <RouterLink :to="{ name:'person4' }" active-class="active">人员管理4</RouterLink>
    </div>
   <!-- 展示区 -->
   <div class="main-content">
    <RouterView ></RouterView>
  </div>
</template>
<script setup lang="ts" name="App">
import { RouterLink, RouterView } from 'vue-router';
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