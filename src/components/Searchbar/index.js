import React from 'react';

import { FiSearch } from 'react-icons/fi';

import { Container, Search } from './style';

export default function Searchbar() {
  return (
    <Container>
        <input placeholder='Pesquise pelo nome...' type="text"/>
        <Search>
            <FiSearch size={24} />
        </Search>
    </Container>
  );
}
