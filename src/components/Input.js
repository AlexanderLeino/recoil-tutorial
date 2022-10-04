import React, {useState} from 'react'
import { useRecoilState } from 'recoil'
import textState from '../atoms'
export const Input = () => {
    const [inputValue, setInputValue] = useRecoilState(textState)

    const onChange = (e) => {
        let value = e.target.value
        setInputValue(value)
    }

  return (
    <input value={inputValue || ""} onChange={onChange}></input>
  )
}
