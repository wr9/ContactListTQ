import styled from 'styled-components';
import media from 'style/mediaQueries';

import { Divider } from 'common';
import { ReactComponent as BackArrowIcon } from 'assets/icons/backArrow.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';

export const Container = styled.div`
  @media ${media.medium} {
    display: none;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  padding: 20px 30px 0 30px;
`;

export const BackButton = styled.button`
  height: 14px;
  width: auto;
`;

export const StyledBackArrowIcon = styled(BackArrowIcon)`
  height: 14px;
  width: auto;
  stroke: ${props => props.theme.colors.secondary};
`;

export const FavoriteButton = styled.button`
  margin-left: auto;
  fill: ${props => (props.isFavorite ? props.theme.colors.secondary : 'none')};
`;

export const StyledHeartIcon = styled(HeartIcon)`
  height: 14px;
  width: auto;
  stroke: ${props => props.theme.colors.secondary};
  fill: inherit;
`;

export const EditButton = styled.button`
  margin-left: 44px;
  margin-right: 30px;
`;

export const StyledEditIcon = styled(EditIcon)`
  height: 14px;
  width: auto;
  stroke: ${props => props.theme.colors.secondary};
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  line-height: 17px;
`;

export const StyledTrashIcon = styled(TrashIcon)`
  margin-left: 15px;
  height: 16px;
  width: auto;
  stroke: ${props => props.theme.colors.secondary};
`;

export const StyledDivider = styled(Divider)`
  margin-top: 19px;
  border-color: ${props => props.theme.colors.secondary};
`;