<template>
    <h3>watchEffect使用</h3>
    <p>{{ num }}</p>
    <button @click="num++">自增</button>
    <hr>
    <p>{{ foo }}</p>
    <button @click="foo--">自减</button>
</template>

<script setup>
    import { ref, watchEffect, watchPostEffect, watchSyncEffect,
       onBeforeMount,
       onMounted,
       onBeforeUpdate,
       onUpdated,
       onBeforeUnmount,
       onUnmounted,
       onErrorCaptured,
       onRenderTracked,
       onRenderTriggered, 
       onActivated,
       onDeactivated,
       getCurrentInstance
    } from 'vue'

    const app = getCurrentInstance()
    const abc = app.appContext.config.globalProperties.$hello
    console.log(abc)

    console.log('setup')

    // 挂载阶段
    onBeforeMount(()=>{console.log('开始挂载')})
    onRenderTracked(()=>{console.log('跟踪')})
    onMounted(()=>{console.log('挂载完成')})

    // 更新阶段
    onRenderTriggered(()=>{console.log('触发')})
    onBeforeUpdate(()=>{console.log('开始更新')})
    onUpdated(()=>{console.log('更新完成')})

    // 销毁阶段
    onBeforeUnmount(()=>{console.log('开始销毁')})
    onUnmounted(()=>{console.log('销毁完成')})
    
    const num = ref(1)
    const foo = ref(100)


    // 处理各种副作用，类似生命周期函数，只执行一次，后面不会执行
    // watchEffect(()=>{
    //     console.log('执行副作用')
    // })

    // watchEffect依赖了num数据，当num发生改变时，就会重新去执行
    // watchEffect(()=>{
    //     console.log('执行副作用1', num.value)
    // })

    // // watchEffect依赖了foo数据，当foo发生改变时，就会重新去执行
    // watchEffect(()=>{
    //     console.log('执行副作用2', foo.value)
    // })

    // watchEffect(()=>{
    //     console.log('同时执行副作用', num.value, foo.value)
    // })


    watchEffect(()=>{
        console.log('同时执行副作用1', num.value, foo.value)
    },{flush: 'pre'})

    // watchEffect(()=>{
    //     console.log('同时执行副作用3', num.value, foo.value)
    // },{flush: 'sync'})

    // {flush: 'sync'} 等价于watchSyncEffect
    watchSyncEffect(()=>{
        console.log('同时执行副作用3', num.value, foo.value)
    },{flush: 'sync'})

    // watchEffect(()=>{
    //     console.log('同时执行副作用2', num.value, foo.value)
    // },{flush: 'post'})

    // {flush: 'post'} watchPostEffect
    watchPostEffect(()=>{
        console.log('同时执行副作用2', num.value, foo.value)
    })




</script>