import React from 'react'
import style from '../../styles/InputContainer.module.css'

const InputContainer = ({ children }) => {
  return (
    <div className={style.input}>
      {children}
    </div>
  )
}

export default InputContainer