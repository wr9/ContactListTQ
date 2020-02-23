import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as contactsActions from 'redux/modules/contacts';
import * as selectors from 'redux/selectors';
import {
  Backdrop,
  Dialog,
  StyledTitle,
  StyledDivider,
  DialogContent,
  StyledText,
  ButtonContainer,
  StyledDeleteButton,
  StyledCancelButton,
} from './DeleteDialog.styled';

const DeleteDialog = ({ isVisible, id, handleDelete, handleCancel }) => {
  const history = useHistory();

  const handleDeleteClick = async () => {
    await handleDelete(id);
    history.push('/');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Backdrop>
      <Dialog>
        <StyledTitle>Delete</StyledTitle>
        <StyledDivider />
        <DialogContent>
          <StyledText>Are you sure you want to delete this contact?</StyledText>
          <ButtonContainer>
            <StyledDeleteButton onClick={handleDeleteClick} type="primary">
              Delete
            </StyledDeleteButton>
            <StyledCancelButton onClick={handleCancel} type="secondary">
              Cancel
            </StyledCancelButton>
          </ButtonContainer>
        </DialogContent>
      </Dialog>
    </Backdrop>
  );
};

const mapStateToProps = state => ({
  isVisible: selectors.getIsDeleteInProgress(state),
  id: selectors.getContactToBeDeletedId(state),
});

const mapDispatchToProps = {
  handleDelete: contactsActions.deleteContact,
  handleCancel: contactsActions.stopDeleteProgress,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDialog);
