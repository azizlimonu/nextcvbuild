import React from 'react';
import style from '../../styles/previewAts/Experience.module.css';

const Experience = ({ experience }) => {
  // console.log(experience);
  return (
    <div>
      <h2>Experience</h2>
      <div className={style.experience}>
        {experience?.map((item) => (
          <div className={style.item} key={item.id}>
            <h3 className={style.position}>
              {item.position}
            </h3>
            {item.company && (
              <p className={style.company}>
                {item.company}, {item.city}
              </p>
            )}
            {item.from && (
              <p className={style.date}>
                {item.from} - {item.to}
              </p>
            )}
            <p className={style.description}>
              {item.description}
            </p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience