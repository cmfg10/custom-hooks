import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

export const useTodos = () => {
  
    const init = () => {

        return JSON.parse( localStorage.getItem('todos') ) || [];

    }

    const [todos, dispatch] = useReducer( todoReducer, [], init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] add TODO',
            payload: todo,
        }

        dispatch( action )
    }

    const handleDeleteTodo = ( id ) =>{

        dispatch({
            type: '[TODO] remove TODO',
            payload: id
        })

    }
    const handleToggleTodo = ( id ) =>{

        dispatch({
            type: '[TODO] Toggle TODO',
            payload: id
        })
        
    }


    return{
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todos,
        todosCount : todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length

    };
}
