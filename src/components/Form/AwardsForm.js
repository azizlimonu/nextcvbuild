import { useCV, useCVDispatch } from '@/context/Store';
import React, { useState } from 'react'
import { Icons } from '../UI/Icons';
import InputContainer from '../UI/InputContainer';
import InputWrapper from '../UI/InputWrapper';
import SectionWrapper from '../UI/SectionWrapper';
import SectionTitle from './SectionTitle'
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';

export default function AwardsForm() {
  const { awards } = useCV();
  const dispatch = useCVDispatch();
  const [isShown, setIsShown] = useState(false);

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  const handleAddAwards = () => {
    dispatch({ type: 'ADD_AWARD' });
  };

  const handleDeleteAward = (item) => {
    dispatch({ type: 'DELETE_AWARD', id: item.id });
  };

  const handleChange = (e, item) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_AWARD',
      award: { ...item, [name]: value }
    });
  };

  return (
    <div>
      <SectionTitle
        text='Awards'
        onToggleSection={handleToggle}
        isShown={isShown}
      />
      {isShown && (
        <SectionWrapper>
          <Icons
            nameIcon='BsFillPlusSquareFill'
            className='dark'
            onClick={handleAddAwards}
            link={true}
          />
          {awards?.map((item) => (
            <InputWrapper key={item.id}>
              <InputContainer>
                <Input
                  type="text"
                  name="title"
                  placeholder="Award"
                  value={item.title}
                  onChange={(e) => handleChange(e, item)}
                  maxLength="25"
                  label="Award"
                />

                <Input
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  value={item.organization}
                  onChange={(e) => handleChange(e, item)}
                  maxLength="25"
                  label="Organization"
                />
                <Input
                  type="tel"
                  name="year"
                  placeholder="Year"
                  value={item.year}
                  onChange={(e) => handleChange(e, item)}
                  maxLength="4"
                  label="Year"
                />
                <div>
                  <Icons
                    nameIcon='BsFillTrashFill'
                    className='dark'
                    onClick={() => handleDeleteAward(item)}
                    link={true}
                  />
                </div>
              </InputContainer>
            </InputWrapper>
          ))}
        </SectionWrapper>
      )}
    </div>
  )
};
