import React from 'react';
import style from '../../styles/previewAts/Skills.module.css';

const Skills = ({ skills }) => {
  return (
    <div>
      <h2>Skills</h2>
      <div className={style.skills}>
        {skills?.map((item) => (
          <div key={item.id}>
            {/* title => level */}
            {item.title && (
              <h3 className={style.title}>
                {item.title}
              </h3>
            )}

            {item.level && (
              <p className={style.level}>
                {item.level}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills