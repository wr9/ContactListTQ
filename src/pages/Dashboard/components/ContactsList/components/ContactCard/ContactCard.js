import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  StyledAvatar,
  StyledName,
  FavoriteButton,
  StyledFavoriteIcon,
  EditButton,
  StyledEditIcon,
  DeleteButton,
  StyledTrashIcon,
} from './ContactCard.styled';

const ContactCard = ({ className, contact, deleteContact, updateContact }) => {
  const { id, avatar, fullName, isFavorite } = contact;
  const history = useHistory();

  const redirectToDetails = () => {
    history.push(`/${id}`);
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
    deleteContact(id).then(() => {
      history.push('/');
    });
  };

  return (
    <Container className={className} onClick={redirectToDetails}>
      <StyledAvatar photoSrc={avatar} />
      <StyledName>{fullName}</StyledName>
      <FavoriteButton onClick={handleFavoriteClick} favorite={isFavorite}>
        <StyledFavoriteIcon />
      </FavoriteButton>
      <EditButton onClick={handleEditClick}>
        <StyledEditIcon />
      </EditButton>
      <DeleteButton onClick={handleDeleteClick}>
        <StyledTrashIcon />
      </DeleteButton>
    </Container>
  );
};

export default ContactCard;
