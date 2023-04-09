<template>
    <h3>父组件ref使用</h3>
    <ModuleRef ref="childRef"></ModuleRef>

    <button @click="showFun">获取子组件的方法和变量</button>
</template>

<script setup>
    import { ref, provide} from 'vue'
    import ModuleRef from '@/components/ModuleRef.vue';

    const childRef = ref(null)

    const showFun = ()=>{
        let childValue = childRef.value
        // console.log(childValue)
        // console.log(childValue.msg)
        childValue.abc()
    }

    // 父级向子孙提供数据
    provide('money', '100w')
</script>