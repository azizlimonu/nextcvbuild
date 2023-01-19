import { useCV, useCVDispatch } from '@/context/Store';
import React, { useState } from 'react'
import { Icons } from '../UI/Icons';
import Input from '../UI/Input';
import InputContainer from '../UI/InputContainer';
import InputWrapper from '../UI/InputWrapper';
import SectionWrapper from '../UI/SectionWrapper';
import SectionTitle from './SectionTitle'

export default function Education() {
  const { education } = useCV();
  console.log(education);
  const dispatch = useCVDispatch();
  const [isShown, setIsShown] = useState(false);

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  const handleAddEducation = () => {
    dispatch({ type: 'ADD_EDUCATION' });
  };

  const handleChange = (e, item) => {
    const { name, value } = e.target;
    console.log("name :", name);
    console.log("value :", value);
    dispatch({
      type: 'CHANGE_EDUCATION',
      education: { ...item, [name]: value }
    });
  };

  const handleDeleteEducation = (item) => {
    dispatch({
      type: 'DELETE_EDUCATION',
      id: item.id
    })
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
            onClick={handleAddEducation}
            link={true}
          />
          {education?.map((item) => (
            <InputWrapper key={item.id}>
              <InputContainer>
                {/* university name */}
                <Input
                  type="text"
                  name="universityName"
                  placeholder="University"
                  value={item.universityName}
                  onChange={(e) => handleChange(e, item)}
                  maxLength="35"
                  label="University"
                />
                {/* city */}
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

              <InputContainer>
                {/* Degree */}
                <Input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={item.degree}
                  onChange={(e) => handleChange(e, item)}
                  maxLength="15"
                  label="Degree"
                />
                {/* Major soon update.*/}
                <Input
                  type="text"
                  name="major"
                  placeholder="Major"
                  value={item.major}
                  onChange={(e) => handleChange(e, item)}
                  maxLength="20"
                  label="Major"
                />
              </InputContainer>

              <InputContainer>
                {/* Date Range */}
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
                onClick={() => handleDeleteEducation(item)}
                link={true}
              />

            </InputWrapper>
          ))}
        </SectionWrapper>
      )}
    </div>
  )
}
