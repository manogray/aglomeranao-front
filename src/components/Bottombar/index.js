import React from 'react';
import { FiHome, FiList, FiUser, FiBell } from 'react-icons/fi';

import { Container, Button } from './style';

export default function Bottombar() {
  return (
    <Container>
        <Button>
            <FiHome size={30} />
        </Button>
        <Button className="withBord">
            <FiList size={30} />            
        </Button>
        <Button className="withBord">
            <FiUser size={30} />
        </Button>
        <Button>
            <FiBell size={30} />
        </Button>
    </Container>
  );
}
