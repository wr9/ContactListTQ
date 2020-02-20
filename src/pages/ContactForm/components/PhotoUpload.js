import React from 'react';
import styled from 'styled-components';
import media from 'style/mediaQueries';

import { ReactComponent as UploadIcon } from 'assets/icons/upload.svg';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';

export const StyledFileUpload = styled.label`
  display: block;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.primary};
  opacity: ${props => (props.photoSrc ? '1' : '0.4')};
  background-image: url(${props => props.photoSrc});
  background-size: contain;
  box-shadow: ${props => (props.photoSrc ? 'inset 0 0 20px 3px rgba(0, 0, 0, 0.4)' : 'none')};
  background-clip: padding-box;
  border: 3px solid rgba(187, 196, 195, 0.3);
  border-radius: 50%;
  width: 150px;
  height: 150px;
  position: relative;
  cursor: pointer;
  @media ${media.medium} {
    flex-shrink: 0;
    margin: 0;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const StyledUploadIcon = styled(UploadIcon)`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const StyledRemoveIcon = styled(AddIcon)`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: rotate(45deg);
  fill: ${props => props.theme.colors.white};
`;

const PhotoUpload = ({ value, onAdd, onDelete }) => {
  const handleClick = e => {
    if (!value) {
      return;
    }
    e.preventDefault();
    onDelete();
  };

  return (
    <StyledFileUpload photoSrc={value}>
      <FileInput type="file" accept=".jpg, .jpeg, .png" onChange={onAdd} onClick={handleClick} />
      {value ? <StyledRemoveIcon /> : <StyledUploadIcon />}
    </StyledFileUpload>
  );
};

export default PhotoUpload;
