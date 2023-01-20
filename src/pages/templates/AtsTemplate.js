import { useCV, useCVDispatch } from '@/context/Store'
import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import style from '../../styles/AtsTemplate.module.css'

// form Component
import AwardsForm from '@/components/Form/AwardsForm';
import EducationForm from '@/components/Form/EducationForm';
import ExperienceForm from '@/components/Form/ExperienceForm';
import GeneralInfoForm from '@/components/Form/GeneralInfoForm';
import SkillsForm from '@/components/Form/SkillsForm';

// preview Component
import Header from '@/components/PreviewAts/Header';
import Education from '@/components/PreviewAts/Education';
import Skills from '@/components/PreviewAts/Skills';
import Awards from '@/components/PreviewAts/Awards';
import GeneralInfo from '@/components/PreviewAts/GeneralInfo';
import Experience from '@/components/PreviewAts/Experience';
import Certification from '@/components/PreviewAts/Certification';

export default function AtsTemplate() {
  const dispatch = useCVDispatch();
  const { generalInfo, skills, education, experience, awards } = useCV();

  const cvRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    onAfterPrint: () => alert("Cv Printed Successfully")
  });

  return (
    <div>
      {/* CV Form */}
      <main className={style.main}>
        <section className={style.cvform}>
          <GeneralInfoForm />
          <SkillsForm />
          <EducationForm />
          <ExperienceForm />
          <AwardsForm />
          <div className={style.button}>
            <button onClick={handlePrint}>Generate PDF</button>
            <button onClick={() => dispatch({ type: 'LOAD_EXAMPLE_CV' })}>
              Example CV
            </button>
            <button onClick={() => dispatch({ type: 'LOAD_EMPTY_CV' })}>
              Empty CV
            </button>
          </div>
        </section>

        {/* CV preview */}
        <section className={style.cvpreview} ref={cvRef}>
          <Header info={generalInfo} />
          <hr />
          <main className={style.mainpreview}>
            {/* left side */}
            <div className={style.leftpreview}>
              <Education education={education} />
              <hr />
              <Skills skills={skills} />
              <hr />
              <Awards awards={awards} />
            </div>

            <div className={style.line}></div>
            {/* right side */}
            <div className={style.rightpreview}>
              <GeneralInfo info={generalInfo} />
              <hr />
              <Experience />
              <hr />
              <Certification />
              <hr />
            </div>
          </main>
        </section>
      </main>
    </div>
  )
}
