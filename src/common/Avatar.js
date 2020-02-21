import React from 'react';
import styled from 'styled-components';

export const StyledAvatar = styled.div`
  background-image: url(${props => props.photoSrc});
  background-size: contain;
  background-clip: padding-box;
  border: 3px solid rgba(187, 196, 195, 0.3);
  border-radius: 50%;
`;

const Avatar = ({ photoSrc, className }) => {
  return <StyledAvatar photoSrc={photoSrc} className={className} />;
};

export default Avatar;

