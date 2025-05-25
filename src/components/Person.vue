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
    <br/>
    <button @click="changeGame">修改游戏列表</button>
    <br/>
</template>
<script setup lang="ts" name="Person">
import { ref } from 'vue'
import { reactive } from 'vue'; // 响应式数据
import { toRefs } from 'vue';
import { toRef } from 'vue';
let person = reactive({
    name: 'zhangsan',
    age: 18
})
let game = ref([{id:'1', name:'无畏契约'},{id:'2', name:'和平精英'},{id:'3', name:'英雄联盟'}]);
function changeName() {
    person.name = 'lisi'
}
function changeAge() {
    person.age = 20
}
function changePerson() {
    //错误方法,不能使用reactive定义的响应式数据
    person = {
        name: 'wangwu',
        age: 30
    }
    // 正确方法,使用Object.assign方法赋值,或者干脆就不用reactive定义响应式数据,直接使用ref定义响应式数据
    Object.assign(person, {
        name: 'wangwu',
        age: 30
    })
}
function changeGame() {
    game.value = [
        {id:'1', name:'无畏契约'},
        {id:'2', name:'和平精英'},
        {id:'3', name:'英雄联盟'},
        {id:'4', name:'原神'}
    ]
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