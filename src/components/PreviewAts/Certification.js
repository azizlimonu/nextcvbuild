import React from 'react';
import style from '../../styles/previewAts/Certification.module.css';

const Certification = ({ certification }) => {
  // console.log(certification);
  return (
    <div>
      <h2>Certification</h2>
      <div className={style.certification}>
        {certification?.map((item) => (
          <div className={style.item} key={item.id}>
            {item.name && (
              <p className={style.name}>
                {item.name}
              </p>
            )}
            {item.source && (
              <p className={style.description}>
                {item.source}
              </p>
            )}
            {item.from && (
              <p className={style.date}>
                {item.from} - {item.to}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certification