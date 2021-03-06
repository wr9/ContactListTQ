import React from 'react';
import styled from 'styled-components';

import { IconLabel } from 'common';
import { PhoneNumberInput } from './components';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone.svg';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';

const AddPhoneNumberContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const AddPhoneNumberButton = styled.button`
  margin-right: 16px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  padding: 12px;
  display: flex;
`;

const StyledAddIcon = styled(AddIcon)`
  width: 8px;
  height: 8px;
  fill: ${props => props.theme.colors.primary};
`;

const AddPhoneNumberLabel = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  line-height: 17px;
`;

const PhoneNumbersForm = ({
  className,
  phoneNumbers,
  onChange,
  onAddPhoneNumber,
  onDeletePhoneNumber,
  errors,
}) => {
  return (
    <div className={className}>
      <IconLabel icon={<PhoneIcon />} label="numbers" />
      {phoneNumbers.map((phoneNumber, index) => (
        <PhoneNumberInput
          phoneNumber={phoneNumber}
          onChange={onChange(index)}
          onDeletePhoneNumber={onDeletePhoneNumber(index)}
          canBeDeleted={phoneNumbers.length > 1}
          error={errors[index]}
          key={index}
        />
      ))}

      <AddPhoneNumberContainer>
        <AddPhoneNumberButton onClick={onAddPhoneNumber}>
          <StyledAddIcon />
        </AddPhoneNumberButton>
        <AddPhoneNumberLabel>Add number</AddPhoneNumberLabel>
      </AddPhoneNumberContainer>
    </div>
  );
};

export default PhoneNumbersForm;
