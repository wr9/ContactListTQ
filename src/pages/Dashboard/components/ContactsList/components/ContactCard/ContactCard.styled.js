import styled from 'styled-components';
import media from 'style/mediaQueries';
import { Avatar } from 'common';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';

export const Container = styled.div`
  border: 1px solid rgba(187, 196, 195, 0.4);
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media ${media.medium} {
    position: relative;
    padding: 0;
    justify-content: center;

    &:hover {
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }
`;

export const AvatarNameContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${media.medium} {
    flex-direction: column;
  }
`;

export const StyledAvatar = styled(Avatar)`
  height: 46px;
  width: 46px;

  @media ${media.medium} {
    margin-bottom: 13px;
  }
`;

export const StyledName = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  font-weight: bold;
  margin-left: 24px;

  @media ${media.medium} {
    margin-left: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media ${media.medium} {
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
  }
`;

export const FavoriteButton = styled.button`
  fill: ${props => (props.favorite ? props.theme.colors.secondary : 'none')};
`;

export const StyledFavoriteIcon = styled(HeartIcon)`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.colors.secondary};
  fill: inherit;
`;

export const EditButton = styled.button`
  margin-left: 32px;

  @media ${media.medium} {
    margin-left: auto;
    display: ${props => (props.isHovered ? 'initial' : 'none')};
  }
`;

export const StyledEditIcon = styled(EditIcon)`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.colors.secondary};
`;

export const DeleteButton = styled.button`
  margin-left: 32px;

  @media ${media.medium} {
    margin-left: 26px;
    display: ${props => (props.isHovered ? 'initial' : 'none')};
  }
`;

export const StyledTrashIcon = styled(TrashIcon)`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.colors.secondary};
`;
