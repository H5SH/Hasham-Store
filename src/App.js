import React from 'react';
import './App.css';
import FileList from './app/FileList';
import { Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">Downloadable Files</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <FileList />
      </Container>
    </div>
  );
}

export default App;
