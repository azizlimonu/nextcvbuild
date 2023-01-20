import React from 'react';
import style from '../../styles/previewAts/GeneralInfo.module.css';

const GeneralInfo = ({ info }) => {
  return (
    <div className={style.info}>
      <h2>Profile</h2>
      <p>{info.description}</p>
    </div>
  )
}

export default GeneralInfo