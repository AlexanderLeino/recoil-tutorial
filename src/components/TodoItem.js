import React from 'react'
import { todoListState } from '../RecoilState'
import { useRecoilState } from 'recoil'

export const TodoItem = ({item}) => {
    console.log(item)
    const [todoList, setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex((listItem) => listItem === item)
    
    function replaceItemAtIndex(arr, index, newValue) {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
      }
      
    function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }

    const editItemText = (e) => {
        let value = e.target.value
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        })
        setTodoList(newList)
    }

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete
        })
        setTodoList(newList)
    }

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
    
        setTodoList(newList);
      };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

