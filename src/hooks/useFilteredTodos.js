import { def } from "@vue/shared";
import { computed, ref } from "vue";

export default function useFilteredTodos(todos) {
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

    return {
        filter,
        filteredTodos
    }
}