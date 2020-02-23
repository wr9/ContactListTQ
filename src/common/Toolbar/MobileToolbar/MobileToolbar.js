import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  IconsContainer,
  BackButton,
  StyledBackArrowIcon,
  FavoriteButton,
  StyledHeartIcon,
  EditButton,
  StyledEditIcon,
  DeleteButton,
  StyledTrashIcon,
  StyledDivider,
} from './MobileToolbar.styled';

const MobileToolbar = ({ type = 'create', contact, onFavoriteClick, onDeleteClick }) => {
  const history = useHistory();

  const isEdit = type === 'edit';
  const isDetails = type === 'details';

  const handleEditClick = () => {
    history.push(`/edit/${contact.id}`);
  };

  const handleBackArrowClick = () => {
    history.goBack();
  };

  return (
    <Container>
      <IconsContainer>
        <BackButton onClick={handleBackArrowClick}>
          <StyledBackArrowIcon />
        </BackButton>
        {isDetails && contact && onFavoriteClick && (
          <>
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
            <StyledTrashIcon />
          </DeleteButton>
        )}
      </IconsContainer>
      <StyledDivider />
    </Container>
  );
};

export default MobileToolbar;
