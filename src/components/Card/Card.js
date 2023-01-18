import cardStyles from '../../styles/Card.module.css';

import React from 'react'
import Link from 'next/link';


export default function Card() {
  const dataCV = [
    {
      title: 'CV Professional',
      image: '/images/cv3.jpg',
      linkPath: '/templates/professionaltemplate'
    },
    {
      title: 'CV ATS',
      image: '/images/cv2.jpg',
      linkPath: '/'
    },

  ];
  console.log(dataCV);
  return (
    <div className={cardStyles.wrapper}>
      <h3 className={cardStyles.title}>Please Choose Your Template</h3>
      <div className={cardStyles.container}>
        {dataCV.map((item, idx) => (
          <div key={idx} className={cardStyles.item}>
            <h4 className={cardStyles.itemtitle}>{item.title}</h4>
            <img src={item.image} className={cardStyles.itemimage} alt={item.title}/>
            <Link href={item.linkPath} className={cardStyles.itemlink}>
              Use This Template
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
