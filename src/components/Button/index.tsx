import React from 'react';

import { Container, ComponentButton } from './styles';

const Button: React.FC = () => {
  return (
    <Container>
      <ComponentButton>Clique aqui para mudar o tema</ComponentButton>
    </Container>
  );
};

export default Button;
