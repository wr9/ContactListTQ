import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  BackButton,
  StyledBackArrowIcon,
  Title,
  FavoriteButton,
  StyledHeartIcon,
  EditButton,
  StyledEditIcon,
  DeleteButton,
  StyledTrashIcon,
} from './DesktopToolbar.styled';

const DesktopToolbar = ({ type = 'create', contact, onFavoriteClick, onDeleteClick }) => {
  const history = useHistory();

  const isEdit = type === 'edit';
  const isDetails = type === 'details';

  const handleBackArrowClick = () => {
    history.goBack();
  };

  const handleEditClick = () => {
    history.push(`/edit/${contact.id}`);
  };

  return (
    <Container>
      <BackButton onClick={handleBackArrowClick}>
        <StyledBackArrowIcon />
      </BackButton>
      {isDetails && contact && onFavoriteClick && (
        <>
          <Title>{contact.fullName}</Title>
          <FavoriteButton onClick={onFavoriteClick} isFavorite={contact.isFavorite}>
            <StyledHeartIcon />
          </FavoriteButton>
          <EditButton onClick={handleEditClick}>
            <StyledEditIcon />
          </EditButton>
        </>
      )}
      {isEdit && contact && onDeleteClick && (
        <DeleteButton onClick={onDeleteClick}>
          Delete
          <StyledTrashIcon />
        </DeleteButton>
      )}
    </Container>
  );
};

export default DesktopToolbar;
