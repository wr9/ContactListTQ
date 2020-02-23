import styled from 'styled-components';
import media from 'style/mediaQueries';

import { ReactComponent as BackArrowIcon } from 'assets/icons/backArrow.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';

export const Container = styled.div`
  display: none;

  @media ${media.medium} {
    display: flex;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

export const BackButton = styled.button`
  margin-left: 0;
`;

export const StyledBackArrowIcon = styled(BackArrowIcon)`
  height: 16px;
  width: auto;
`;

export const Title = styled.div`
  margin-left: 20px;
  color: #adb8b6;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
`;

export const FavoriteButton = styled.button`
  margin-left: auto;
  fill: ${props => (props.isFavorite ? props.theme.colors.secondary : 'none')};
`;

export const StyledHeartIcon = styled(HeartIcon)`
  height: 16px;
  width: auto;
  stroke: ${props => props.theme.colors.secondary};
  fill: inherit;
`;

export const EditButton = styled.button`
  margin-left: 44px;
`;

export const StyledEditIcon = styled(EditIcon)`
  height: 16px;
  width: auto;
  stroke: ${props => props.theme.colors.secondary};
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  display: flex;
  align-items: center;
  color: #adb8b6;
  font-size: 14px;
  line-height: 17px;
`;

export const StyledTrashIcon = styled(TrashIcon)`
  margin-left: 15px;
  height: 16px;
  width: auto;
  stroke: ${props => props.theme.colors.secondary};
`;