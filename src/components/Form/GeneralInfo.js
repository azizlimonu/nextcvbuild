import { useCV, useCVDispatch } from '@/context/Store';
import React, { useState } from 'react'
import Input from '../UI/Input';
import InputContainer from '../UI/InputContainer';
import InputWrapper from '../UI/InputWrapper';
import SectionWrapper from '../UI/SectionWrapper';
import TextArea from '../UI/TextArea';
import SectionTitle from './SectionTitle';

export default function GeneralInfo() {
  const [isShown, setIsShown] = useState(true);
  const { generalInfo } = useCV();
  const dispatch = useCVDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'CHANGE_GENERAL_INFO',
      name,
      value,
    });
  };

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <div>
      {/* section header */}
      <SectionTitle
        text='Personal Information'
        onToggleSection={handleToggle}
        isShown={isShown}
      />

      {isShown && (
        <SectionWrapper>
          <InputWrapper>
            {/* handle Display Name */}
            <InputContainer>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={generalInfo.firstName}
                onChange={(e) => handleChange(e)}
                maxLength="15"
                label="First Name"
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={generalInfo.lastName}
                onChange={(e) => handleChange(e)}
                maxLength="15"
                label="Last Name"
              />
            </InputContainer>

            {/* Job Title */}
            <Input
              type="text"
              name="title"
              placeholder="Title"
              value={generalInfo.title}
              onChange={(e) => handleChange(e)}
              maxLength="50"
              label="Title"
            />

            {/* Contact Info */}
            <InputContainer>
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                value={generalInfo.phoneNumber}
                onChange={(e) => handleChange(e)}
                maxLength="20"
                label="Phone"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={generalInfo.email}
                onChange={(e) => handleChange(e)}
                maxLength="25"
                label="Email"
              />
            </InputContainer>

            {/* Address */}
            <Input
              type="text"
              name="address"
              placeholder="Address"
              value={generalInfo.address}
              onChange={(e) => handleChange(e)}
              maxLength="40"
              label="Address"
            />

            {/* contact social media */}
            <InputContainer>
              <Input
                type="text"
                name="linkedIn"
                placeholder="LinkedIn"
                value={generalInfo.linkedIn}
                onChange={(e) => handleChange(e)}
                maxLength="40"
                label="LinkedIn"
              />
              <Input
                type="text"
                name="facebook"
                placeholder="Facebook"
                value={generalInfo.facebook}
                onChange={(e) => handleChange(e)}
                maxLength="40"
                label="Facebook"
              />
            </InputContainer>

            {/* Description */}
            <TextArea
              name="description"
              placeholder="Description"
              value={generalInfo.description}
              onChange={(e) => handleChange(e)}
              maxLength="600"
            />
          </InputWrapper>
        </SectionWrapper>
      )}

    </div>
  )
}
