import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { loadContact, updateContact } from 'utils';
import { MobileToolbar, DesktopToolbar } from 'common';
import { ReactComponent as EmailIcon } from 'assets/icons/email.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone.svg';

import {
  Container,
  AvatarNameContainer,
  StyledAvatar,
  StyledName,
  InfoContainer,
  PositionedDivider,
  ContactContainer,
  EmailContainer,
  EmailLabel,
  StyledEmail,
  PhoneNumbersContainer,
  PhoneNumbersLabel,
  PhoneNumberValuesContainer,
  PhoneNumberContainer,
  PhoneNumberLabel,
  PhoneNumberValue,
} from './ContactDetails.styled';

const ContactDetails = () => {
  const { id } = useParams();

  const [contact, setContact] = useState(null);

  useEffect(() => {
    loadContact(id).then(loadedContact => {
      setContact(loadedContact);
    });
  }, [id]);

  if (!contact) {
    return null;
  }

  const { avatar, fullName, email, phoneNumbers, isFavorite } = contact;

  const handleFavoriteClick = () => {
    const updatedContact = { ...contact, isFavorite: !isFavorite };
    updateContact(id, updatedContact).then(() => {
      setContact(updatedContact);
    });
  };

  return (
    <div>
      <MobileToolbar type="details" contact={contact} onFavoriteClick={handleFavoriteClick} />
      <Container>
        <AvatarNameContainer>
          <StyledAvatar photoSrc={avatar} />
          <StyledName>{fullName}</StyledName>
        </AvatarNameContainer>
        <InfoContainer>
          <DesktopToolbar type="details" contact={contact} onFavoriteClick={handleFavoriteClick} />
          <PositionedDivider />
          <ContactContainer>
            <EmailContainer>
              <EmailLabel icon={<EmailIcon />} label="email" fontSize="16px" />
              <StyledEmail>{email}</StyledEmail>
            </EmailContainer>
            <PhoneNumbersContainer>
              <PhoneNumbersLabel icon={<PhoneIcon />} label="numbers" />
              <PhoneNumberValuesContainer>
                {phoneNumbers.map((phoneNumber, index) => (
                  <PhoneNumberContainer key={index}>
                    <PhoneNumberLabel>{phoneNumber.label}</PhoneNumberLabel>
                    <PhoneNumberValue href={`tel:${phoneNumber.value}`}>
                      {phoneNumber.value}
                    </PhoneNumberValue>
                  </PhoneNumberContainer>
                ))}
              </PhoneNumberValuesContainer>
            </PhoneNumbersContainer>
          </ContactContainer>
        </InfoContainer>
      </Container>
    </div>
  );
};

export default ContactDetails;
