//创建一个路由器并暴露出去
import {createRouter,createWebHistory,createWebHashHistory} from "vue-router"
import Person4 from "@/components/Person4.vue"
import Person3 from "@/components/Person3.vue"
import Person2 from "@/components/Person2.vue"

//创建路由器
const router = createRouter({
    history: createWebHistory(),    //路由器的工作模式,哈希模式,history模式
    routes: [ //路由规则
        {
            name: "home",
            path: "/home",
            // component: () => import("@/components/Person4.vue")
            component: Person4
        },
        {
            name: "person",
            path: "/person",
            component: Person3,
            children: [ //嵌套路由
                {
                    name: "person2",
                    path: "person2/:id/:name/:age?/:sex?",
                    component: Person2,
                    //第一种写法:将路由参数映射到组件的props数据中
                    // props: true,
                    //第二种写法:函数写法,可以自己决定将什么作为props给路由组件
                    // props(route) {
                    //     return route.query
                    // }
                    // props: ($route) => {
                    //     return {
                    //         id: $route.params.id,
                    //         name: $route.params.name,
                    //         age: $route.params.age,
                    //         sex: $route.params.sex
                    //     }
                    // }
                }
            ]
            //路由元信息
            // meta: {
            //     title: "Person",
            //     isAuth: true
            // }
            //路由独享守卫
            // beforeEnter: (to, from, next) => {
            //     console.log("路由独享守卫")
            //     next()
            // }
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})
//暴露出去
export default router