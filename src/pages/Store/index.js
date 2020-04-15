import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiChevronDown, FiBarChart2, FiMapPin, FiClock, FiSmile } from 'react-icons/fi';

import { Container, Title, Centerlize } from './style';
import { CardShop, CardHeader, CardInfo, Stats, Stat } from '../../styles/global';
import Topbar from '../../components/Topbar';
import Searchbar from '../../components/Searchbar';

import fluxImg from '../../assets/images/flux.svg';

import atack from '../../assets/images/atack.png';
import db from '../../assets/images/db.png';
import novaera from '../../assets/images/novaera.png';

export default function Store() {
  
  const [lojas, setLojas] = useState([
      {
          nome: "Atack",
          endereco: "Av. das Torres",
          nota: 9.5,
          fluxo: "aglomerado",
          foto: atack,
      }
  ]);

  return (
    <Container>

        <Topbar hasBack />

        <Title>
            Mercados
            <FiChevronDown className='down' size={24} color={'#8900f4'}/>
        </Title>

        <Centerlize>
        
            <Searchbar />

            <Link>
                <CardShop>
                    <CardHeader photo={atack}>
                        <span>aglomerado! <FiBarChart2 size={18} color={'#FC0D54'} /> </span>
                    </CardHeader>
                    <CardInfo>
                        <h2>Atack - Av. das Torres</h2>
                        <Stats>
                            <Stat>
                                <FiMapPin size={20} color={'#8900f4'} />
                                <p>6Km</p>
                            </Stat>
                            <Stat>
                                <FiClock size={20} color={'#8900f4'} />
                                <p>30 min</p>
                            </Stat>
                            <Stat>
                                <FiSmile size={20} color={'#8900f4'} />
                                <p className="evaluate">9,5</p>
                            </Stat>
                        </Stats>
                    </CardInfo>
                </CardShop>
            </Link>
        
        </Centerlize>

    </Container>
  );
}
