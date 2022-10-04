import React from 'react'
import { selector, get, useRecoilValue } from 'recoil'
import textState from '../atoms'
import charCountState from '../selectors'
export const CharacterCount = () => {
    const count = useRecoilValue(textState)  
    
    return (
    <div>Character Count: {count.length}</div>
  )
}
