import React from 'react';
import { FiMenu } from 'react-icons/fi';

import { Container, Button } from './style';

export default function Topbar() {
  return (
    <Container>
        <h2>Aglomera<span>não!</span></h2>
        <Button>
            <FiMenu color={'#000'} size={22} />
        </Button>
    </Container>
  );
}
