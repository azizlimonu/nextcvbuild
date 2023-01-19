import React from 'react'
import style from '../../styles/InputWrapper.module.css'

const InputWrapper = ({ children }) => {
  return (
    <div className={style.fields}>
      {children}
    </div>
  )
}

export default InputWrapper