<template>
    <h3>watch使用</h3>

    <p>num: {{ num }}</p>
    <p>total: {{ total }}</p>

    <button @click="num++">+1</button>

    <button @click="stopAll">停止</button>

    <div ref="countDom">{{ count }}</div>
    <button @click="handleClick">按钮</button>
</template>

<script setup>
    import { ref, watch, computed, reactive} from 'vue'
    import { useRoute } from 'vue-router'
    
    const route = useRoute()
    // console.log(route)

    // console.log(route.query)
    // console.log(route.params)

    const num = ref(100)

    let total = computed(()=>{
        return num.value *100
    })

    const watch1 = watch(num, (newNum,oldNum)=>{
        console.log('num发生变化了',newNum, oldNum)
    })

    const watch2 = watch([num, total], ([newNum, newTotal],[oldNum,oldTotal])=>{
        console.log('num发生变化了',newNum, oldNum)
        console.log('total发生变化了',newTotal, oldTotal)
    })

    const stopAll = ()=>{
        watch1() 
        watch2()
    }


    // const count = ref({
    //     a: 1,
    //     b: 2
    // });

    // const handleClick = function () {
    //     count.value.a = 5;
    // };

    // watch(() => {
    //     return { ...count.value };
    // },(newValue, oldValue) => {
    //     console.log('值发生了变更', newValue, oldValue);
    //     },{ deep: true }
    // );

    // const single = reactive({ count: 1, test: { a: 1, b: 2 } });
    // const handleClick = function () {
    //     single.test.a++;
    // };
    // watch(
    //     single,
    //     (newValue, oldValue) => {
    //         console.log('值发生了变更', newValue, oldValue);
    //     }
    // );

    const count = ref(1);
    const countDom = ref(null);
    const handleClick = function () {
        count.value++;
    };
    watch(
        count,
        (newValue, oldValue) => {
            console.log('---', countDom.value.textContent);
            console.log('值发生了变更', newValue, oldValue);
        },
        { deep: true, flush: 'sync' }
    );
</script>