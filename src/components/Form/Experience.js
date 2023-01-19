import { useCV, useCVDispatch } from '@/context/Store';
import React, { useState } from 'react'
import { Icons } from '../UI/Icons';
import InputContainer from '../UI/InputContainer';
import InputWrapper from '../UI/InputWrapper';
import SectionWrapper from '../UI/SectionWrapper';
import SectionTitle from './SectionTitle'
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';

export default function Experience() {
  const { experience } = useCV();
  const dispatch = useCVDispatch();
  const [isShown, setIsShown] = useState(false);

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  const handleAddExperience = () => {
    dispatch({ type: 'ADD_EXPERIENCE' });
  };

  const handleDeleteExperience = (item) => {
    dispatch({ type: 'DELETE_EXPERIENCE', id: item.id });
  };

  const handleChange = (e, item) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_EXPERIENCE',
      experience: { ...item, [name]: value }
    });
  };

  return (
    <div>
      <SectionTitle
        text='Experience'
        onToggleSection={handleToggle}
        isShown={isShown}
      />
      {isShown && (
        <SectionWrapper>
          <Icons
            nameIcon='BsFillPlusSquareFill'
            className='dark'
            onClick={handleAddExperience}
            link={true}
          />
          {experience?.map((item) => (
            <InputWrapper key={item.id}>
              <Input
                type="text"
                name="position"
                placeholder="Position"
                value={item.position}
                onChange={(e) => handleChange(e, item)}
                maxLength="35"
                label="Position"
              />
              <InputContainer>
                <Input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={item.company}
                  onChange={(e) => handleChange(e, item)}
                  maxLength="20"
                  label="Company"
                />
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={item.city}
                  onChange={(e) => handleChange(e, item)}
                  maxLength="20"
                  label="City"
                />
              </InputContainer>
              <TextArea
                type="text"
                name="description"
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleChange(e, item)}
                maxLength="350"
                label="Description"
              />
              <InputContainer>
                <Input
                  type="tel"
                  name="from"
                  placeholder="From"
                  value={item.from}
                  onChange={(e) => handleChange(e, item)}
                  maxLength="4"
                  label="From"
                />
                <Input
                  type="tel"
                  name="to"
                  placeholder="To"
                  value={item.to}
                  onChange={(e) => handleChange(e, item)}
                  maxLength="4"
                  label="To"
                />
              </InputContainer>
              <Icons
                nameIcon='BsFillTrashFill'
                className='dark'
                onClick={() => handleDeleteExperience(item)}
                link={true}
              />
            </InputWrapper>
          ))}
        </SectionWrapper>
      )}
    </div>
  )
};
