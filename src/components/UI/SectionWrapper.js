import React from 'react'
import style from '../../styles/SectionWrapper.module.css'

const SectionWrapper = ({ children }) => {
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  )
}

export default SectionWrapper