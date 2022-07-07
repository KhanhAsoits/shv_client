import React from 'react';
import { Container } from 'react-bootstrap';

const ClientMainLayout = ({ children }) => {
  return (
    <Container>
      <div className='bg-white p-4 rounded-lg relative'>{children}</div>
    </Container>
  );
};

export default ClientMainLayout;
