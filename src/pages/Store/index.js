import React from 'react';

import { FiChevronDown } from 'react-icons/fi';

import { Container, Title, Centerlize } from './style';
import Topbar from '../../components/Topbar';
import Searchbar from '../../components/Searchbar';

export default function Store() {
  return (
    <Container>

        <Topbar hasBack />

        <Title>
            Mercados
            <FiChevronDown className='down' size={24} color={'#8900f4'}/>
        </Title>

        <Centerlize>
        
            <Searchbar />
        
        </Centerlize>

    </Container>
  );
}
