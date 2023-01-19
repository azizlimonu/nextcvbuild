import React from 'react';
import { BsFillPlusSquareFill, BsFillFileMinusFill } from 'react-icons/bs';
import style from '../../styles/SectionTitle.module.css';

export default function SectionTitle({ text, isShown, onToggleSection }) {
  return (
    <div onClick={onToggleSection} className={style.header}>
      <h3>{text}</h3>
      {!isShown && <BsFillPlusSquareFill className={style.light} />}
      {isShown && <BsFillFileMinusFill className={style.light} />}
    </div>
  )
}
