<template>
    <div>
        <h1>姓名：{{ person.name }}</h1>
        <h1>年龄：{{ person.age }}</h1>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
    <br/>
    <h1>游戏列表</h1><br/>
    <ul>
        <li v-for="g in game" :key="g.id">
            {{ g.name }}
        </li>
    </ul>
</template>
<script setup lang="ts" name="Person">
import { ref } from 'vue'
import { reactive } from 'vue'; // 响应式数据
let person = reactive({
    name: 'zhangsan',
    age: 18
})
let game = [{id:'1', name:'无畏契约'},{id:'2', name:'和平精英'},{id:'3', name:'英雄联盟'}];
function changeName() {
    person.name = 'lisi'
}
function changeAge() {
    person.age = 20
}
</script>
<style scoped>
    /* #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        /* color: #2c3e50; */
        /* margin-top: 60px; */
    /* } */ 
</style>