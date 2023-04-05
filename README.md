# 技术栈官网
    技术栈：Vue3+VueRouter4+Pinia2+Vant3/ElementPlus

    1、Vue3官网：https://vuejs.org/

    2、VueRouter(V4)：https://router.vuejs.org/

    3、Pinia(V2)：https://pinia.vuejs.org/

    4、Vite构建工具：https://vitejs.dev/

    5、ElementPlus：https://element-plus.gitee.io/zh-CN/

    6、Vant(v3)：https://vant-contrib.gitee.io/vant/#/zh-CN\

# 搭建环境: https://github.com/tengluomomei/vue3/tree/master
    第一步：npm create vite xx --template vue
    第二步：cd xx
    第三步：npm install
    第四步：npm run dev

# setup

    setup 组件选项
        新的 setup 选项在组件创建之前执行，一旦 props 被解析，就将作为组合式 API 的入口。
        setup 中避免使用 this , setup的调用 在 data 、methods、computed 解析之前
        setup 选项是一个接收 props 和 context 的函数
        将setup 返回的函数 暴露给 组件的其余部分 （计算属性、方法、生命周期）

    setup(props,context)
        props是一个对象，包含父组件传递给子组件的所有数据
        context表示上下文，为什么在setup中要有一个上下文对象，因为在setup选项中没有this。
        context对象格式，暴露组件的三个属性,{ attrs, slots, emit }
        attrs: Attribute 非响应式对象 slots: 插槽 非响应式对象  emit: 触发事件 方法

    ref: 响应式变量

    setup：setup内注册生命周期钩子

    hooks:setup中相关联的功能封装成一个个可独立可维护的hooks


# 组合式API
    ref: 一般用于定义基本数据类型数据，比如 String / Boolean / Number等

    isRef:判断一个变量是否为一个 ref 对象

    unref:用于返回一个值，如果访问的是 ref变量，就返回其 .value值；如果不是 ref变量，就直接返回

    customRef:自定义ref对象，把ref对象改写成get/set，进一步可以为它们添加 track/trigger

    toRef:把一个 reactive对象中的某个属性变成 ref 变量

    toRefs:把一个reactive响应式对象变成ref变量

    shallowRef:对复杂层级的对象，只将其第一层变成 ref 响应。 (性能优化)

    triggerRef：强制更新一个 shallowRef对象的渲染

    reactive：定义响应式变量，一般用于定义引用数据类型

    isReactive: 判断一变量是不是 reactive的

    readonly: 把一个对象，变成只读的

    isReadonly:判断一个变量是不是只读的

    isProxy: 判断一个变量是不是 readonly 或 reactive的

    toRaw:返回 reactive变量或 readonly变量的"原始对象"

    markRaw: 把一个普通对象标记成"永久原始"，从此将无法再变成proxy

    shallowReactive: 定义一个reactive变量，只对它的第一层进行Proxy, 只有第一层变化时视图才更新

    computed:计算属性,两种方法

    watch:
        watch(WatcherSource, Callback, [WatchOptions]):
            WatcherSource：想要监听的响应式数据
            Callback：执行的回调函数，入参（newValue,oldValue）
            [WatchOptions]：deep、immediate、flush可选
                deep:当需要对对象等引用类型数据进行深度监听时，设置deep: true,默认值是false。
                immediate：默认情况下watch是惰性的，设置immediate: true时，watch会在初始化时立即执行回调函数一次。
                flush：控制回调函数的执行时机，。它可设置为 pre、post 或 sync。
                    pre：默认值，当监听的值发生变更时，优先执行回调函数（在dom更新之前执行）。
                    post：dom更新渲染完毕后，执行回调函数。
                    sync:一旦监听的值发生了变化，同步执行回调函数（建议少用）。

        当使用ref创建的响应式数据时：
            1，基本数据类型：可以直接监听，可获取新旧值。
            2，引用数据类型：需要deep:true深度监听，但是只能获取新值。要想获取新旧值，要想获取新旧值，需要监听目标数据的深拷贝。

        当使用reactive创建的响应式数据时:
            1，基本数据类型：可以直接指定某个属性进行监听，可以获取到新旧值。
            2，引用数据类型：直接监听创建的reactive对象，其中只要有属性变更，都能被监听到。但是它只能获取到新值。
            3，reactive创建的响应式数据，深度监听设置是无效的，也就是deep:true/false都是能监听到的。
            
        监听多个数据：

    watchEffect:相当于是 react中的 useEffect()，用于执行各种副作用
        watchPostEffect，等价于 watchEffect(fn, {flush:'pre'})，前置执行的副作用。
        watchPostEffect，等价于 watchEffect(fn, {flush:'post'})，后置执行的副作用。
        watchSyncEffect，等价于 watchEffect(fn, {flush:'sync'})，同步执行的副作用。


    生命周期钩子：
        选项式的 beforeCreate、created，被setup替代了。setup表示组件被创建之前、props被解析之后执行，它是组合式 API 的入口。
        选项式的 beforeDestroy、destroyed 改为 beforeUnmount、unmounted。
        新增两个生命周期 onRenderTracked、onRenderTriggered，它们只在开发环境有用，常用于调试。
        在使用 setup组合时，不建议使用选项式的生命周期，建议使用 on*的生命周期。

    provide / inject：
        provide：父级向子孙提供数据
        inject：子孙使用父级提供的数据
        如果需要改变父组件的数据，可以在父组件中设置方法，通过provide将该方法传递给子组件
        const changeMsg = ()=>{
            msg.value = 'give me'
        }
        provide('changeMsg', changeMsg)
        const changeMsg = inject('changeMsg')

    getCurrentInstance:函数来返回当前组件的实例对象,也就是当前vue这个实例对象

    总结常用API如下：
    ref
    reactive
    watch
    computed
    watchEffect
    toRefs
    onMounted
    onBeforeUnmount
    onActivated
    onDeactivated
    其它的组合API了解，可能面试会问
    

# Vue3组件通信
    props: 主要用于父组件向子组件通信
        父组件：自定义属性传参、自定义事件
        子组件：defineProps接收，注意不需要在从vue中引入defineProps就可以使用

    $emit:通过自定义事件传值，主要用于子组件向父组件通信。
        在子组件的点击事件中，通过触发父组件中的自定义事件，把想传给父组件的信息以参数的形式带过去，父组件便可以拿到子组件传过来的参数值。
        在vue3中，自定义事件需要接收：import {defineEmits} from 'vue'
        第一种写法：
            父组件：@myClick="onMyClick"
            子组件：let emit = defineEmits(['myClick'])  @click="emit('myClick', {name: 'xiaomi', age: 14})"

        第二种写法：
            父组件：@myClick="onMyClick"
            子组件：@click="changeUser"  let emit = defineEmits(['myClick']) const changeUser = ()=>{emit("myClick", {name: 'xiaomi', age: 14})}

    ref:访问refs绑定的组件的属性或者方法
        在vue2上，如果ref定义在组件上，是为了获取组件实例,vue3也是如此.
        子组件通过defineExpose向外暴露父组件想获取的值.

# Hooks封装
    所谓 Hooks封装，就是把不同的逻辑关注点抽离出来，以达到业务逻辑的独立性。这也是Vue3的最大亮点。

    2，如何封装Hooks
    在 setup 组合的开发模式下，把具体某个业务功能所用到的 ref、reactive、watch、computed、watchEffect 等，提取到一个以 use* 开头的自定义函数中去。
    封装成 use* 开头的Hooks函数，不仅可以享受到封装带来的便利性，还有利于代码逻辑的复用。Hooks函数的另一个特点是，被复用时可以保持作用域的独立性，即，同一个Hooks函数被多次复用，彼此是不干扰的。

    3.使用场景：
        1.功能类Hooks，即为了逻辑复用的封装；
        2.业务类Hooks，即为了逻辑解耦的封装

# router
    结合element-plus搭建项目：https://element-plus.gitee.io/zh-CN/component

    v4和v3路由的区别：
        1.vue3必须要使用vue-router(v4)
        2.创建router实例的方式变了，使用 const router = createRouter({history, routes:[]})
        3.指定路由模式的属性变了，使用history属性：createWebHashHistory()   带#的hash路由模式 / createWebHistory()不带#的history路由模式
        4.路由注册，在mian.js中 app.use(router)
        5.如果是选项式组件，this.$router/this.$route可以正常使用；如果是组合式API进行开发，必须使用 useRoute、userRouter等API
        6.router-link已经没有tag属性的，可以用custom和插槽实现自定义渲染
        7.router-view新增了"插槽"功能，极其强大，参见路由文档中的伪代码，它在实现keep-alive和transition动画将变得更简单，还可以Suspense实现Loading。
        8.新增了几个组合API：useRoute / useRouter

# Pinia使用:
    https://pinia.web3doc.top/
    Vuex的下一版本，在Vue2和Vue3中都能用.

    创建：
        1.createPinia() 用于创建pinia实例
        2.defineStore('storeId', { state, getters, actions }) 定义store,每个store以use*开头的Hooks函数, state必须是工厂函数, getters计算属性, actions可以编写同步方法和异步逻辑

    修改store中的state：
        可以使用 $patch({})进行批量修改, 还可以调用actions方法来修改

    重置store中的state：
        使用$reset() 方法重置store
    
    监听store中的state的变化：
        使用$subscribe((mutations, state)=>{})进行监听. 监听是一个副作用, 建议放在watchEffect中
    
    计算actions方法的执行时间：
        使用$onAction(({name, after})=>{})

    警告: 如果你对store进行解构, 响应式会失效, 使用 storeToRefs包裹一层即可
 
