import Awards from '@/components/Form/Awards';
import Education from '@/components/Form/Education';
import Experience from '@/components/Form/Experience';
import GeneralInfo from '@/components/Form/GeneralInfo';
import Skills from '@/components/Form/Skills';
import { useCV } from '@/context/Store'
import React from 'react'
import style from '../../styles/AtsTemplate.module.css'

export default function AtsTemplate() {
  const { generalInfo, skills, education, experience, awards } = useCV();
  const handlePrint = () => {
    console.log("Printed");
  }
  return (
    <div>
      {/* CV Form */}
      {/* app */}
      <main className={style.main}>
        {/* cv form sect */}
        <section className={style.cvform}>
          <GeneralInfo />
          <Skills />
          <Education />
          <Experience />
          <Awards />
          {/* Awards */}
          {/* button  */}
          <button onClick={handlePrint}>Generate PDF</button>
        </section>

        {/* generate pdf */}

        {/* CV Preview */}
        <section>
          <p>CV Preview</p>
          {/* Header */}
          <main>
            {/* left side */}
            <div>
              {/* education */}
              {/* skills */}
              {/* awards */}
            </div>

            {/* right side */}
            <div>
              {/* general info */}
              {/* experience */}
            </div>
          </main>
        </section>
      </main>
    </div>
  )
}
