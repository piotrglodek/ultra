import React from 'react';
import { TextField } from '../../shared/components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import styled from 'styled-components';
// schema
import { loginSchema, schemaLoginValues } from '../../schema';

const Form = styled.form`
  width: 100%;
`;

function SignIn() {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: schemaLoginValues,
    resolver: yupResolver(loginSchema),
    mode: 'onTouched',
  });
  const handleLoginUser = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(handleLoginUser)}>
      <TextField
        name='loginEmail'
        type='text'
        label='Email'
        register={register}
        error={errors.loginEmail}
      />
      <TextField
        name='loginPassword'
        type='password'
        label='Password'
        register={register}
        error={errors.loginPassword}
      />
      <TextField name='loginSubmit' register={register} type='submit' />
    </Form>
  );
}

export default SignIn;
