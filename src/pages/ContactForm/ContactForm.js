import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { saveContact } from 'utils';

import { PhotoUpload } from './components';
import { MobileToolbar, Button, DesktopToolbar } from 'common';
import { ReactComponent as PersonIcon } from 'assets/icons/person.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/email.svg';
import {
  Container,
  TextInputsContainer,
  PositionedDivider,
  FlexWrapper,
  PositionedInput,
  PositionedIconLabel,
  PositionedPhoneNumbersForm,
  ButtonsContainer,
  StyledCancelButton,
  StyledSaveButton,
} from './ContactForm.styled';

const ContactForm = () => {
  const history = useHistory();

  const [avatar, setAvatar] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState([{ label: '', value: '' }]);

  const handleAvatarAdd = e => {
    const avatar = e.target.files[0];
    const avatarUrl = window.URL.createObjectURL(avatar);
    setAvatar(avatarUrl);
  };

  const handleAvatarDelete = () => {
    setAvatar('');
  };

  const handleFullNameChange = e => {
    const fullName = e.target.value;
    setFullName(fullName);
  };

  const handleEmailChange = e => {
    const fullName = e.target.value;
    setEmail(fullName);
  };

  const handlePhoneNumberChange = index => phoneNumber => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index] = phoneNumber;
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handleAddPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, { label: '', value: '' }]);
  };

  const handleDeletePhoneNumber = index => () => {
    const isLastElement = index === phoneNumbers.length - 1;
    const updatedPhoneNumbers = isLastElement
      ? phoneNumbers.slice(0, index)
      : [...phoneNumbers.slice(0, index), ...phoneNumbers.slice(index + 1)];
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handleCancel = () => {
    history.goBack();
  };

  const handleSave = () => {
    const contact = {
      avatar,
      fullName,
      email,
      phoneNumbers,
    };
    saveContact(contact).then(id => {
      console.log(id);
    });
  };

  return (
    <div>
      <MobileToolbar />
      <Container>
        <PhotoUpload value={avatar} onAdd={handleAvatarAdd} onDelete={handleAvatarDelete} />
        <TextInputsContainer>
          <DesktopToolbar />
          <PositionedDivider />
          <PositionedIconLabel icon={<PersonIcon />} label="full name" />
          <FlexWrapper>
            <PositionedInput
              placeholder="Full name"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </FlexWrapper>
          <PositionedDivider />
          <PositionedIconLabel icon={<EmailIcon />} label="email" />
          <FlexWrapper>
            <PositionedInput placeholder="Email" value={email} onChange={handleEmailChange} />
          </FlexWrapper>
          <PositionedDivider />
          <PositionedPhoneNumbersForm
            phoneNumbers={phoneNumbers}
            onChange={handlePhoneNumberChange}
            onAddPhoneNumber={handleAddPhoneNumber}
            onDeletePhoneNumber={handleDeletePhoneNumber}
          />
          <ButtonsContainer>
            <StyledCancelButton type="secondary" onClick={handleCancel}>
              Cancel
            </StyledCancelButton>
            <StyledSaveButton onClick={handleSave}>Save</StyledSaveButton>
          </ButtonsContainer>
        </TextInputsContainer>
      </Container>
    </div>
  );
};

export default ContactForm;
