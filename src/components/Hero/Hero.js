import heroStyles from '../../styles/Hero.module.css';

import React from 'react'
import Link from 'next/link';

export default function Hero() {
  return (
    <div className={heroStyles.container}>
      <div className={heroStyles.section}>
        <p className={heroStyles.title}>
          Create Your Own CV with
        </p>
        <h1 className={heroStyles.subtitle}>
          CV-Builder
        </h1>

        <p className={heroStyles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vitae.
        </p>

        <Link href='/templates' className={heroStyles.linkbutton}>Get Started</Link>
      </div>
    </div>
  )
}
