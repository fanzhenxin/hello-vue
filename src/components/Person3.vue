<template>
  <div>
    <h1>Hello Vue 3!</h1>
  </div>
</template>

<script setup lang="ts" name="Person3">
  import { ref,reactive,defineProps } from 'vue'
  import { type PersonInterface,type Persons } from '@/types'
  let person:PersonInterface = {
    name: 'zhangsan',
    age: 18
  }
//   let personList:Array<PersonInterface> = [
//     {name: 'zhangsan', age: 18},
//     {name: 'lisi', age: 19},
//     {name: 'wangwu', age: 20}
//   ]  或者
  let personList:Persons = [
    {name: 'zhangsan', age: 18},
    {name: 'lisi', age: 19},
    {name: 'wangwu', age: 20}
  ]
//   let personList2:Persons = reactive([
//     {name: 'zhangsan', age: 18},
//     {name: 'lisi', age: 19},
//     {name: 'wangwu', age: 20}
//   ])  或者
  let personList2 = reactive<Persons>([
    {name: 'zhangsan', age: 18},
    {name: 'lisi', age: 19},
    {name: 'wangwu', age: 20, sex: 'male'}
  ])
</script>
<style scoped>
</style>