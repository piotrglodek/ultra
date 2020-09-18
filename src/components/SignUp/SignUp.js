import React from 'react';
import { TextField } from '../../shared/components';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers';
// schema
import { registerSchema, schemaRegisterValues } from '../../schema';

const Form = styled.form`
  width: 100%;
`;

function SignUp() {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: schemaRegisterValues,
    resolver: yupResolver(registerSchema),
    mode: 'onTouched',
  });
  const handleRegisterUser = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(handleRegisterUser)}>
      <TextField
        name='registerEmail'
        type='email'
        label='Email'
        register={register}
        error={errors.registerEmail}
      />
      <TextField
        name='registerPassword'
        type='password'
        label='Password'
        register={register}
        error={errors.registerPassword}
      />
      <TextField
        name='registerRepeatPassword'
        type='password'
        label='Repeat password'
        register={register}
        error={errors.registerRepeatPassword}
      />
      <TextField name='registerSubmit' register={register} type='submit' />
    </Form>
  );
}

export default SignUp;
