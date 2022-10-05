import React from 'react'
import { todoListState } from '../RecoilState'
import { TodoItem } from './TodoItem'
import { TodoItemCreator } from './TodoItemCreator'
import { useRecoilValue } from 'recoil'
import  TodoListStats  from './TodoListStats'
import TodoListFilters from './TodoListFilters'
const TodoList = () => {

    const todoList = useRecoilValue(todoListState)
    
  return (
    <>
        <TodoItemCreator />
        <TodoListFilters />
        <TodoListStats />
       
        
        {todoList.map((todo) => {
            return <TodoItem key={todo.id} item={todo}/>
        })}
    </>
  )
}

export default TodoList
