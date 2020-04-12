import React from 'react';

import { Container, List, TitleList, Card, InfoCard } from './style';
import Topbar from '../../components/Topbar';
import Bottombar from '../../components/Bottombar';

import mercado from '../../assets/images/oliveira.png';

export default function Home() {
  return (
    <Container>

        <Topbar />
        <List>
            <TitleList>Estabelecimentos disponíveis</TitleList>
            <Card>
                <img src={mercado} alt=""/>
                <InfoCard>
                    <h3>Mercadinho Oliveira</h3>
                    <p>Av. Beira Rio, 560</p>

                </InfoCard>
            </Card>
        </List>

        <Bottombar />
    </Container>
  );
}
