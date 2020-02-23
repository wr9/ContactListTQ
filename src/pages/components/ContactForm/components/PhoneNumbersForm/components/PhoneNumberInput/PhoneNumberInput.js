import React from 'react';
import {
  Container,
  ValueInput,
  LabelIconContainer,
  LabelInput,
  DeletePhoneNumberButton,
  StyledCloseIcon,
} from './PhoneNumberInput.styled';

const PhoneNumberInput = ({
  className,
  phoneNumber,
  onChange,
  onDeletePhoneNumber,
  canBeDeleted,
  error = { label: false, value: false },
}) => {
  const handleChangeValue = e => {
    const value = e.target.value;
    onChange({ label: phoneNumber.label, value });
  };

  const handleChangeLabel = e => {
    const label = e.target.value;
    onChange({ label, value: phoneNumber.value });
  };

  return (
    <Container className={className}>
      <ValueInput
        placeholder="Number"
        value={phoneNumber.value}
        onChange={handleChangeValue}
        error={error.value}
      />
      <LabelIconContainer>
        <LabelInput
          placeholder="Label"
          value={phoneNumber.label}
          onChange={handleChangeLabel}
          error={error.label}
        />
        <DeletePhoneNumberButton onClick={onDeletePhoneNumber} disabled={!canBeDeleted}>
          <StyledCloseIcon />
        </DeletePhoneNumberButton>
      </LabelIconContainer>
    </Container>
  );
};

export default PhoneNumberInput;
