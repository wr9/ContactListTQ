import React from 'react';
import { connect } from 'react-redux';

import * as pickerActions from 'redux/modules/picker';
import * as pickerSelectors from 'redux/selectors/picker';
import { PICKER_OPTIONS } from 'consts';
import { Container, Title, Divider } from './Picker.styled';

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
