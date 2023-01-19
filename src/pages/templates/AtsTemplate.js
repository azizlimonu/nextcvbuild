import GeneralInfo from '@/components/Form/GeneralInfo';
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
          {/* general Info */}
          <GeneralInfo />
          {/* Skills */}
          {/* Education */}
          {/* Experience */}
          {/* Awards */}
          {/* button  */}
          <button onClick={handlePrint}>Generate PDF</button>
        </section>

        {/* generate pdf */}

        {/* CV Preview */}
        <section>
          {/* Header */}
          <main>
            {/* left side */}
            <div>
              {/* education */}
              {/* skills */}
              {/* awards */}
            </div>

            <div>Line 1</div>
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
