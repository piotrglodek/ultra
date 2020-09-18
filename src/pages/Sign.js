import React from 'react';
import { SignIn, SignUp } from '../components';
import { Container } from '../shared/components';

import styled from 'styled-components';

const Row = styled(Container)`
  padding: 10rem 0;
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  padding: 2rem;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

function Sign() {
  return (
    <Row>
      <Column>
        <SignUp />
      </Column>
      <Column>
        <SignIn />
      </Column>
    </Row>
  );
}

export default Sign;
