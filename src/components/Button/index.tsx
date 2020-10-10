import React from 'react';

import { Container, ComponentButton } from './styles';

const Button: React.FC = () => {
  const handleToggleTheme = () => {
    console.log('O botão foi clicado');
  }

  return (
    <Container>
      <ComponentButton onClick={handleToggleTheme} >Clique aqui para mudar o tema</ComponentButton>
    </Container>
  );
};

export default Button;
