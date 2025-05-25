<template>
    <div>
        <h1>Person4</h1>
        <!-- <p>{{list}}</p> -->
        <ul>
            <li v-for="item in list" :key="item.id">{{item.name}}--{{item.age }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts" name="Person4">
import { ref,defineProps,withDefaults } from 'vue'
import { type Persons } from '@/types';
//只接受list
// let x = defineProps(['a','list'])
// console.log(x)

//接受list+限制类型+限制必要性(?)+默认值
withDefaults(defineProps<{list?:Persons}>(),
{list:()=>[{id: 1,name: 'zhangsan', age: 18},{id: 2,name: 'lisi', age: 19},{id: 3,name: 'wangwu', age: 20}]})
</script>
<style scoped>
</style>