import React from 'react';
import history from '../../services/history';

import { FiMenu, FiArrowLeft } from 'react-icons/fi';

import { Container, BackButton, MenuButton } from './style';

export default function Topbar({ hasBack }) {

  if(hasBack){
    return (
        <Container>
            <BackButton onClick={history.goBack}>
                <FiArrowLeft color={'#000'} size={22} />
            </BackButton>
            <h2>Aglomera<span>não!</span></h2>
            <MenuButton>
                <FiMenu color={'#000'} size={22} />
            </MenuButton>
        </Container>
    );
  }else {
    return (
        <Container>
            <h2>Aglomera<span>não!</span></h2>
            <MenuButton>
                <FiMenu color={'#000'} size={22} />
            </MenuButton>
        </Container>
    );
  }
}
