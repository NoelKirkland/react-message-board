import React from 'react';
import Header from './Header';
import DisplayControl from './DisplayControl';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <DisplayControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
