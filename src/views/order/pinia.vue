<template>
    <h3>pinia使用</h3>
    <p>{{ store.num }}</p>
    <button @click="add">自增</button>
    <ul>
        <li v-for="(item, index) in store.listData" :key="index">{{  item.title  }}</li>
    </ul>
    <button @click="changePage(-1)">上一页</button><button  @click="changePage(1)">下一页</button>
</template>

<script setup>
    import { ref,watchEffect } from 'vue'
    import useStore from '@/store/useStore'

    const store = useStore()

    const add = ()=>{
        // 直接修改state的值
        // store.$patch({num: store.num+10})
        store.addFun(10)
    }

    const page = ref(1)
    watchEffect(()=>{
        store.getList({page: page.value, limit: 5})
    })

    const changePage = (pageNum)=>{
        if(pageNum === 1 && pageNum === -1)return;
        page.value += pageNum
    }

</script>