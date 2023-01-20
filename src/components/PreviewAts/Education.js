import React from 'react';
import style from '../../styles/previewAts/Education.module.css';

const Education = ({ education }) => {
  return (
    <div>
      <h2>Education</h2>
      <div className={style.education}>
        {education?.map((item) => (
          <div key={item.id}>
            {item.degree && (
              <h3 className={style.degree}>
                {item.degree} of {item.major}
              </h3>
            )}
            {item.universityName && (
              <p className={style.university}>
                {item.universityName}, {item.city}
              </p>
            )}
            {item.from && (
              <p className={style.range}>
                {item.from} - {item.to}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education