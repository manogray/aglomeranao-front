import React from 'react';

import { Container, Filter, Title, Text } from './style';

export default function Banner({ photo, text, height, user }) {
  return (
    <Container height={height} photo={photo}>
        <Filter>
            <Title>Bem vindo, {user}</Title>
            <Text>{text}</Text>
        </Filter>
    </Container>
  );
}
