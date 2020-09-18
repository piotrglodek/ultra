import React from 'react';
import styled from 'styled-components';

const TextFieldWrapper = styled.div`
  margin: 18px 0;
  position: relative;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0.8);
  padding: 1.8rem 1.4rem;
  border-radius: 0.4rem;
  font-size: inherit;
  font-weight: inherit;
  color: ${({ theme: { color } }) => color.primary};
  width: 320px;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: ${({ theme: { color } }) => color.primary};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: inherit;
  font-weight: inherit;
  background-color: ${({ theme: { color } }) => color.white};
  z-index: 1;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 14px;
  top: 28px;
  padding: 0.4rem;
  transform: translateY(-40px) scale(0.8);
  transition: all 0.2s ease;
  letter-spacing: inherit;
`;

const ErrorLabel = styled.span`
  color: #f11212;
  font-weight: 300;
  font-size: 14px;
  padding-top: 4px;
  letter-spacing: normal;
`;

const InputSubmit = styled.input`
  padding: 12px 28px;
  border: none;
  color: ${({ theme: { color } }) => color.white};
  border-radius: 4px;
  background-color: ${({ theme: { color } }) => color.primary};
  cursor: pointer;
  font-size: 1.8rem;
`;

function TextField(props) {
  const { name, type, label, register, error } = props;

  if (type !== 'submit') {
    return (
      <TextFieldWrapper>
        <Input ref={register} name={name} type={type} id={name} />
        <Label htmlFor={name}>{label}</Label>
        {error && <ErrorLabel>{error && error.message}</ErrorLabel>}
      </TextFieldWrapper>
    );
  } else {
    return (
      <InputSubmit name={name} type={type} ref={register} value='submit' />
    );
  }
}

export default TextField;
