import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  AvatarNameContainer,
  StyledAvatar,
  StyledName,
  ButtonsContainer,
  FavoriteButton,
  StyledFavoriteIcon,
  EditButton,
  StyledEditIcon,
  DeleteButton,
  StyledTrashIcon,
} from './ContactCard.styled';

const ContactCard = ({ className, contact, onDeleteClick, updateContact }) => {
  const { id, avatar, fullName, isFavorite } = contact;
  const history = useHistory();
  const [isHovered, setHoverState] = useState(false);

  const redirectToDetails = () => {
    history.push(`details/${id}`);
  };

  const handleFavoriteClick = e => {
    e.stopPropagation();
    updateContact(id, { ...contact, isFavorite: !isFavorite });
  };

  const handleEditClick = e => {
    e.stopPropagation();
    history.push(`/edit/${id}`);
  };

  const handleDeleteClick = e => {
    e.stopPropagation();
    onDeleteClick(id);
  };

  const handleHoverStart = () => {
    setHoverState(true);
  };
  const handleHoverStop = () => {
    setHoverState(false);
  };

  return (
    <Container
      className={className}
      onClick={redirectToDetails}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverStop}
    >
      <AvatarNameContainer>
        <StyledAvatar photoSrc={avatar} />
        <StyledName>{fullName}</StyledName>
      </AvatarNameContainer>
      <ButtonsContainer>
        <FavoriteButton onClick={handleFavoriteClick} favorite={isFavorite}>
          <StyledFavoriteIcon />
        </FavoriteButton>
        <EditButton onClick={handleEditClick} isHovered={isHovered}>
          <StyledEditIcon />
        </EditButton>
        <DeleteButton onClick={handleDeleteClick} isHovered={isHovered}>
          <StyledTrashIcon />
        </DeleteButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ContactCard;
