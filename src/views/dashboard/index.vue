<template>
    <h3>首页</h3>
    <button @click="viewPage">跳转订单列表</button>

    <HelloWorld msg="HelloWorld"></HelloWorld>
</template>

<script setup>
    import {ref} from 'vue'
    import HelloWorld from '@/components/HelloWorld.vue'

    import { useRouter} from 'vue-router'
    
    const router = useRouter()
    console.log(router)

    const viewPage = ()=>{
        // router.push({
        //     path: '/order/list',
        //     query:{
        //         name: 'xiaomi',
        //         age: 12
        //     }
        // }) 
        
        router.push({
            name: 'orderList',
            params:{
                name: 'xiaohong',
                age: 13
            }
        })  
    }
</script>

