import { useCV, useCVDispatch } from '@/context/Store';
import React, { useState } from 'react'
import SectionWrapper from '../UI/SectionWrapper';
import SectionTitle from './SectionTitle'

export default function Experience() {
  const { education } = useCV();
  const dispatch = useCVDispatch();
  const [isShown, setIsShown] = useState(false);

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  const handleAddEducation = () => {
    dispatch({ type: 'ADD_EDUCATION' });
  };

  return (
    <div>
      <SectionTitle
        text='Education'
        onToggleSection={handleToggle}
        isShown={isShown}
      />
      {isShown && (
        <SectionWrapper>
          <Icons
            nameIcon='BsFillPlusSquareFill'
            className='dark'
            onClick={handleAddNewSkill}
            link={true}
          />

        </SectionWrapper>
      )}
    </div>
  )
}
