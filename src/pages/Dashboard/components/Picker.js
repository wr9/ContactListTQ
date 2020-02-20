import React from 'react';
import styled from 'styled-components';
import media from 'style/mediaQueries';
import { connect } from 'react-redux';

import * as pickerActions from 'redux/modules/picker';
import * as pickerSelectors from 'redux/selectors/picker';
import { PICKER_OPTIONS } from 'consts';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.button`
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  color: ${props => (props.isSelected ? props.theme.colors.primary : props.theme.colors.secondary)};

  @media ${media.medium} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Divider = styled.div`
  height: 14px;
  margin: auto 30px;
  border: 1px solid ${props => props.theme.colors.secondary};
`;

const Picker = ({ selectedPickerOption, setPicker }) => {
  const handlePickerClick = e => {
    const { value: clickedOption } = e.target;
    if (selectedPickerOption === clickedOption) return;
    setPicker(clickedOption);
  };

  return (
    <Container>
      <Title
        isSelected={selectedPickerOption === PICKER_OPTIONS.ALL_CONTACTS.value}
        onClick={handlePickerClick}
        value={PICKER_OPTIONS.ALL_CONTACTS.value}
      >
        {PICKER_OPTIONS.ALL_CONTACTS.title}
      </Title>
      <Divider />
      <Title
        isSelected={selectedPickerOption === PICKER_OPTIONS.MY_FAVORITES.value}
        onClick={handlePickerClick}
        value={PICKER_OPTIONS.MY_FAVORITES.value}
      >
        {PICKER_OPTIONS.MY_FAVORITES.title}
      </Title>
    </Container>
  );
};

const mapStateToProps = state => ({
  selectedPickerOption: pickerSelectors.getSelectedPickerOption(state),
});

const mapDispatchToProps = {
  setPicker: pickerActions.setPicker,
};

export default connect(mapStateToProps, mapDispatchToProps)(Picker);
