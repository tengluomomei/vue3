<template>
    <h3>todolist</h3>
    <TodoAdd @add-todo="addTodo"/>
    <TodoFilter 
        :selected="filter"
        @change-filter="filter=$event"
     />
    <TodoList :todos="filteredTodos"/>

</template>

<script setup>
    import {reactive, ref, computed} from "vue"
    import TodoAdd from "@/components/TodoAdd.vue"
    import TodoFilter from "@/components/TodoFilter.vue";
    import TodoList from "@/components/TodoList.vue"
    import useFilteredTodos from "@/hooks/useFilteredTodos"

    const todos = reactive([]);
    const addTodo = (todo) => todos.push(todo)

    // const {filter, filteredTodos} = useFilteredTodos(todos);

    const filter = ref('all')
    
    const filteredTodos = computed(() => {
        switch (filter.value) {
            case "done":
                return todos.filter((todo) => todo.completed);
            case "todo":
                return todos.filter((todo) => !todo.completed);
            default:
                return todos
           
        }
    })
</script>