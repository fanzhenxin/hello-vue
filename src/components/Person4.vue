<template>
    <div>
        <h1>Person4</h1>
        <!-- <p>{{list}}</p> -->
        <ul>
            <li v-for="item in list" :key="item.id">
                <!-- {{item.name}}--{{item.age }} -->
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/person/person2?id=${item.id}`" active-class="active">
                    {{item.name}}--{{item.age }}
                </RouterLink> -->
                <!-- 第二种写法 -->
                <!-- <RouterLink :to="{ path: '/person/person2', query: { id: item.id,name: item.name,age: item.age } }" active-class="active">
                    {{item.name}}--{{item.age }}
                </RouterLink> -->
                //param参数传递
                <RouterLink :to="{ name: 'person2', params: { id: item.id,name: item.name,age: item.age } }" active-class="active">
                    {{item.name}}--{{item.age }}
                </RouterLink>
            </li>
        </ul>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts" name="Person4">
import { ref,defineProps,withDefaults,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
import { useRoute,RouterView,RouterLink } from 'vue-router';
import { type Persons } from '@/types';
import axios from 'axios';
let route = useRoute();


//只接受list
// let x = defineProps(['a','list'])
// console.log(x)

//接受list+限制类型+限制必要性(?)+默认值
withDefaults(defineProps<{list?:Persons}>(),
{list:()=>[{id: 1,name: 'zhangsan', age: 18},{id: 2,name: 'lisi', age: 19},{id: 3,name: 'wangwu', age: 20}]})
</script>
<style scoped>
</style>