import { defineStore } from "pinia"

export const usePersonStore = defineStore("person", {
    state: () => {
        return {
            persons: [
                { id: 1, name: "张三", age: 18, sex: "男" },
                { id: 2, name: "李四", age: 20, sex: "女" }
            ]
        }
    }
})