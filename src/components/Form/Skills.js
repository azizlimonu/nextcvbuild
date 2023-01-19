import { useCV, useCVDispatch } from '@/context/Store';
import React, { useState } from 'react'
import SectionWrapper from '../UI/SectionWrapper';
import SectionTitle from './SectionTitle';
import { Icons } from '../UI/Icons';
import InputWrapper from '../UI/InputWrapper';
import Input from '../UI/Input';
import style from '../../styles/Skills.module.css';

export default function Skills() {
  const [isShown, setIsShown] = useState(false);
  const { skills } = useCV();
  const dispatch = useCVDispatch();

  const handleAddNewSkill = () => {
    dispatch({
      type: 'ADD_SKILL',
    });
  };

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  const handleChangeSkill = (e, skill) => {
    const { name, value } = e.target;
    const field = name === 'skill-name' ? 'title' : 'rating';
    // console.log("name : ", name);
    // console.log("value : ", value);

    dispatch({
      type: 'CHANGE_SKILL',
      skill: { ...skill, [field]: value },
    });
  };

  console.log(skills);

  const handleDeleteSkill = (skill) => {
    dispatch({
      type: 'DELETE_SKILL',
      id: skill.id
    });
  };


  return (
    <div>
      <SectionTitle
        text="Skills"
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

          <InputWrapper>
            {skills?.map((skill) => (
              <div key={skill.id} className={style.skill}>
                <Input
                  type="text"
                  name="skill-name"
                  placeholder="Skill"
                  value={skill.title}
                  onChange={(e) => handleChangeSkill(e, skill)}
                  label='Skill'
                />
                <select
                  name='skill-rating'
                  onChange={(e) => handleChangeSkill(e, skill)}
                  value={skill.rating}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advance">Advance</option>
                  <option value="master">Master</option>
                </select>

                <Icons
                  nameIcon='BsFillTrashFill'
                  className='dark'
                  onClick={() => handleDeleteSkill(skill)}
                  link={true}
                />
              </div>
            ))}
          </InputWrapper>

        </SectionWrapper>
      )}
    </div>
  )
}
