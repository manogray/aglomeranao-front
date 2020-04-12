import React from 'react';
import { FiMenu } from 'react-icons/fi';

import { Container } from './style';

export default function Topbar() {
  return (
    <Container>
        <h2>Aglomera <span>Não!</span></h2>
        <FiMenu />
    </Container>
  );
}
