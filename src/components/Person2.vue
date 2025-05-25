<template>
    <div>
        <input type="text" v-model="firstName" />
        <input type="text" v-model="lastName" />
        <input type="text" v-model="age" />
        <button @click="changeFullName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <br/>
        <p>姓名：{{fullName}}</p>
        <p>年龄：{{age}}</p>
    </div>
    <br/>
    <div>
        <p>id：{{id}}</p>
        <p>游戏：{{game}}</p>
        <p>价格：{{price}}</p>
        <button @click="changeGame">修改游戏名称</button>
        <br/>
    </div>
</template>
<script setup lang="ts" name="Person2">
import { ref,reactive,computed,toRefs } from 'vue'
let computerGames = reactive({
    'id': 1,
    'game': 'csgo',
    'price': 100
})
// let {id,game,price} = computerGames
// let id = computerGames.id
// let game = computerGames.game
// let price = computerGames.price
let {id,game,price} = toRefs(computerGames)

let firstName = ref('zhang')
let lastName = ref('san')
let age = ref(18)
let fullName = computed({
    get() {
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + "-" + lastName.value
    },
    set(val) {
        let names = val.split('-')
        firstName.value = names[0]
        lastName.value = names[1]
    }
})
function changeFullName() {
    fullName.value = 'li-si'
}
function changeAge() {
    age.value += 1
}
function changeGame() {
    computerGames.game = 'dota'
}
</script>
<style scoped>

</style>