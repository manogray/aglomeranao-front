import React from 'react';
import history from '../../services/history';

import { Container, ListContainer, TitleList, LateralList, Item, Store, PicIcon } from './style';
import Topbar from '../../components/Topbar';
import Banner from '../../components/Banner';
import { FiMapPin, FiCalendar, FiMap } from 'react-icons/fi';

import people from '../../assets/images/people.png';
import lojas from '../../assets/images/960x01.png';
import farmacias from '../../assets/images/1140-pharmacist-woman.imgcache1.png';
import pet from '../../assets/images/petshop-chapeco-dedetizadora1.png';

import paw from '../../assets/images/paw.svg';
import cart from '../../assets/images/cart.svg';
import drugs from '../../assets/images/drugs.svg';

export default function Home() {
  
  function goToMarket(){
    history.push('/mercados');
  }

  return (
    <Container>

        <Topbar />
        
        <Banner 
            photo={people}
            user={'Lucas'} 
            text={'A plataforma web responsiva em que você pode escolher um estabelecimento dentre os cadastrados e agendar um horário oportuno de atendimento'} 
            height={195} 
        />

        <ListContainer>
            <TitleList>Opções</TitleList>

            <LateralList>
                <Item>
                    <FiMapPin size={47} color={'#8900F4'} />
                    <p>Check in</p>
                </Item>
                <Item>
                    <FiCalendar size={47} color={'#8900F4'} />
                    <p>Agenda</p>
                </Item>
                <Item>
                    <FiMap size={47} color={'#8900F4'} />
                    <p>Mapa</p>
                </Item>
            </LateralList>

        </ListContainer>

        <ListContainer>
            <TitleList>Estabelecimentos</TitleList>

            <LateralList>
                <Store onClick={goToMarket}>
                    <PicIcon photo={lojas}>
                        <img src={cart} alt=""/>
                    </PicIcon>
                    <p>Mercados</p>
                </Store>
                <Store>
                    <PicIcon photo={farmacias}>
                        <img src={drugs} alt=""/>
                    </PicIcon>
                    <p>Farmácias</p>
                </Store>
                <Store>
                    <PicIcon photo={pet}>
                        <img src={paw} alt=""/>
                    </PicIcon>
                    <p>Petshops</p>
                </Store>
            </LateralList>

        </ListContainer>

    </Container>
  );
}
