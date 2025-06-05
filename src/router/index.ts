//创建一个路由器并暴露出去
import {createRouter,createWebHistory} from "vue-router"
import Person4 from "@/components/Person4.vue"
import Person3 from "@/components/Person3.vue"

//创建路由器
const router = createRouter({
    history: createWebHistory(),    //路由器的工作模式
    routes: [ //路由规则
        {
            path: "/home",
            // component: () => import("@/components/Person4.vue")
            component: Person4
        },
        {
            path: "/person",
            component: Person3
        }
    ]
})
//暴露出去
export default router