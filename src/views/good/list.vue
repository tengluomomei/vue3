<template>
    <h3>商品列表</h3>
    <!-- <p>{{ count }}</p>
    <button @click="addFun">+1</button> -->


    <!-- <input type="text" v-model="name"> -->


    <!-- shallowRef的用法 -->
    <!-- <p>{{ info.a.b.c }}</p>
    <button @click="addInfo">shallowRef + 1</button> -->

    <!-- readonly的用法 -->
    <!-- <button @click="editInfo">readonly + 1</button> -->

    <!-- shallowReactive的用法 -->
    <!-- {{ aa }}
    <button @click="editShallowReactive">shallowReactive的用法</button> -->

    <!-- computed -->
    <p>{{ num }}</p>
    <button @click="num++"> + 1</button>
    <p>{{ total }}</p>
    <input type="text" v-model.number="total">


</template>

<script setup>
    import {isRef, ref, unref, customRef, onRenderTracked, 
        onRenderTriggered, reactive, toRef, toRefs, shallowRef, 
        triggerRef, isReactive, readonly, isReadonly,
        isProxy,toRaw, markRaw, shallowReactive, computed} from 'vue'
    
    // // ref对象
    // const num = 1
    // const count = ref(5) // ref对象
    // console.log(count.value)

    // const addFun = ()=>{
    //     count.value++
    // }



    // // isRef:判断一个变量是否为一个 ref 对象
    // const str = ref('hello')
    // console.log(isRef(num))
    // console.log(isRef(str))


    // // unref
    // let count = ref(55)
    // console.log(unref(count))
    // console.log(unref(count.value))
    // let num = 10
    // console.log(unref(num))


    // // customRef 自定义ref对象，把ref对象改写成get/set
    // let name = customRef((track, trigger)=>{
    //     let value = ''
    //     return {
    //         get(){
    //             track()
    //             return value
    //         },
    //         set(val){
    //             trigger()
    //             value = val
    //         }
    //     }
    // })

    // onRenderTracked((ev)=>{
    //     console.log('获取',ev)
    // })

    // onRenderTriggered((ev)=>{
    //     console.log('修改',ev)
    // })


    // reactive 申明对象, isReactive判断
    // let user = {
    //     name: 'xiaohong',
    //     age: 12  
    // }
    // const xiaohong = reactive(user)
    // console.log(isReactive(xiaohong))
    // console.log(xiaohong)


    
    // // toRef: 把一个 reactive对象中的某个属性变成 ref 变量
    // const obj = reactive({
    //     name: 'xiaoming',
    //     age: 12
    // })
    // // console.log(obj)
    // console.log(obj.name)
    // let name = toRef(obj, 'name')
    // console.log(isRef(name))



    // toRefs:把一个reactive响应式对象变成ref变量
    // const obj = reactive({
    //     name: 'xiaoming',
    //     age: 12
    // })
    // let {name, age} = toRefs(obj)
    // console.log(isRef(name), isRef(age))

    // // shallowRef:对复杂层级的对象，只将其第一层变成 ref 响应。
    // let info = ref({a: {b:{c:3}}})
    // console.log(info)
    // const addInfo = ()=>{
    //     info.value.a.b.c++  
    // }

    // let info = shallowRef({a: {b:{c:3}}})
    // const addInfo = ()=>{
    //     // info.value = {a: {b:{c:100}}}
    //     // info.value.a = {b:{c:100}}
    //     // info.value.a.b = {c:100}
    //     // info.value.a.b.c= 100

    //     info.value.a.b.c++
    //     triggerRef(info) // 强制更新
    // }

     


    // // readonly / isReadonly / isProxy
    // const obj = {a: 1,b:2}
    // const info = reactive(obj)

    // // 普通对象,reactive对象，ref对象
    // const abc = readonly({c:3,d:4})
    // const user = readonly(info)
    // const foo = readonly(ref(12))
    // const xxx = 666

    // const editInfo = ()=>{
    //     // abc.c++  
    //     // user.a++
    // }

    // console.log(isReadonly(abc))
    // console.log(isReadonly(user))
    // console.log(isReadonly(foo))
    // console.log(isReadonly(xxx))

    // console.log(isProxy(abc))
    // console.log(isProxy(info))
    // console.log(isProxy(xxx))
    // console.log(isProxy(ref(12)))

    // console.log(toRaw(abc))
    // console.log(toRaw(user))



    // markRaw
    // const bcd = markRaw({a:1,b:2})
    // const user2 = reactive(bcd)
    // console.log(isReactive(user2)) // false

    

    // shallowReactive
    // const aa = shallowReactive({ gf: {
    //         f: {
    //             s: {
    //                 d: 4
    //             },
    //             c: 3
    //         },
    //         b: 2
    //     },
    //     a: 1})

    // const editShallowReactive = ()=>{
    //     aa.a= 666;
    //     //aa.gf.b= 666;
    //     ///aa.gf.f.c= 666;
    //     // aa.gf.f.s.d= 666;
    // }


    // computed
    const num = ref(100)
    // let total = computed({
    //     get(){
    //         return num.value *100
    //     },
    //     set(val){
    //         num.value =  val / 100
    //     }
    // })

    let total = computed(()=>{
        return num.value *100
    })




















    













</script>

