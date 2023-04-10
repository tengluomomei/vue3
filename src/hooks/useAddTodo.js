import { ref } from "vue"


export default function useAddTodo(emit) {
    const todoContent = ref('')
    const emitAddTodo = () => {
        const todo = {
            id: new Date().getTime(),
            content: todoContent.value,
            completed: false
        }
        emit('add-todo', todo);
        todoContent.value = ''
    }
    return {
        todoContent,
        emitAddTodo
    }
}