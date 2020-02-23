import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import media from 'style/mediaQueries';

import * as selectors from 'redux/selectors';
import { PICKER_OPTIONS } from 'consts';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.button`
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  color: ${props => (props.isSelected ? props.theme.colors.primary : props.theme.colors.secondary)};

  @media ${media.medium} {
    font-size: 18px;
    line-height: 22px;
  }
`;

const Divider = styled.div`
  height: 14px;
  margin: auto 30px;
  border: thin solid ${props => props.theme.colors.secondary};
`;

const Picker = ({ selectedPickerOption }) => {
  const history = useHistory();

  const handlePickerClick = e => {
    const { value: clickedOption } = e.target;
    if (selectedPickerOption === clickedOption) return;
    history.push(`/${PICKER_OPTIONS[clickedOption].queryParam}`);
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
  selectedPickerOption: selectors.getSelectedPickerOption(state),
});

export default connect(mapStateToProps)(Picker);
