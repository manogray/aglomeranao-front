import React from 'react';

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
  return (
    <Container>

        <Topbar hasBack />

        <Title>
            Mercados
            <FiChevronDown className='down' size={24} color={'#8900f4'}/>
        </Title>

        <Centerlize>
        
            <Searchbar />

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

            <CardShop>
                <CardHeader photo={db}>
                    <span>aglomerado! <FiBarChart2 size={18} color={'#FC0D54'} /> </span>
                </CardHeader>
                <CardInfo>
                    <h2>Hiper DB - Cidade Nova</h2>
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
                            <p className="evaluate">8</p>
                        </Stat>
                    </Stats>
                </CardInfo>
            </CardShop>

            <CardShop>
                <CardHeader photo={novaera}>
                    <span>aglomerado! <FiBarChart2 size={18} color={'#FC0D54'} /> </span>
                </CardHeader>
                <CardInfo>
                    <h2>Nova Era - Coroado</h2>
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
                            <p className="evaluate">7</p>
                        </Stat>
                    </Stats>
                </CardInfo>
            </CardShop>

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

            <CardShop>
                <CardHeader photo={db}>
                    <span>aglomerado! <FiBarChart2 size={18} color={'#FC0D54'} /> </span>
                </CardHeader>
                <CardInfo>
                    <h2>Hiper DB - Cidade Nova</h2>
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
                            <p className="evaluate">8</p>
                        </Stat>
                    </Stats>
                </CardInfo>
            </CardShop>

            <CardShop>
                <CardHeader photo={novaera}>
                    <span>aglomerado! <FiBarChart2 size={18} color={'#FC0D54'} /> </span>
                </CardHeader>
                <CardInfo>
                    <h2>Nova Era - Coroado</h2>
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
                            <p className="evaluate">7</p>
                        </Stat>
                    </Stats>
                </CardInfo>
            </CardShop>

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

            <CardShop>
                <CardHeader photo={db}>
                    <span>aglomerado! <FiBarChart2 size={18} color={'#FC0D54'} /> </span>
                </CardHeader>
                <CardInfo>
                    <h2>Hiper DB - Cidade Nova</h2>
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
                            <p className="evaluate">8</p>
                        </Stat>
                    </Stats>
                </CardInfo>
            </CardShop>

            <CardShop>
                <CardHeader photo={novaera}>
                    <span>aglomerado! <FiBarChart2 size={18} color={'#FC0D54'} /> </span>
                </CardHeader>
                <CardInfo>
                    <h2>Nova Era - Coroado</h2>
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
                            <p className="evaluate">7</p>
                        </Stat>
                    </Stats>
                </CardInfo>
            </CardShop>
        
        </Centerlize>

    </Container>
  );
}
