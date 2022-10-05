import React, {useEffect, useState} from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { todoListState } from '../RecoilState'

export const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('')
    const setTodoList = useSetRecoilState(todoListState)

    console.log(setTodoList)

    let id = 0;
    function getId() {
      return id++
    }
    
    const onSubmit = () => {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        }
      ])
      setInputValue('')
    }

    const onChange = (e) => {
        let value = e.target.value
        setInputValue(value)
    }


  return (
    <>
      <input value={inputValue} onChange={onChange} type='text'></input>
      <button onClick={onSubmit}>Submit Todo Item</button>
    </>
  )
}
