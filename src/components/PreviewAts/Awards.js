import React from 'react';
import style from '../../styles/previewAts/Awards.module.css';

const Awards = ({ awards }) => {
  return (
    <div>
      <h2>Awards</h2>
      <div className={style.awards}>
        {awards?.map((item) => (
          <div key={item.id}>
            <h3 className={style.title}>
              {item.title}
            </h3>
            <p className={style.organization}>
              {item.organization}
            </p>
            <p className={style.year}>
              {item.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Awards