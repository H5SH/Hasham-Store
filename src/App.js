import React from 'react';
import './App.css';
import FileList from './app/FilesList';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Hasham Asad Store</Navbar.Brand>
          <div className="header-info ml-auto">
            <span style={{fontStyle: 'italic'}} className="text-white font-weight-light font-italic">Click any card to download the file</span>
          </div>
          <Nav className="ml-auto">
            <Nav.Link href="https://www.linkedin.com/in/hasham-asad-44ab9926a/" target="_blank">
              <FaLinkedin className="text-light" />
            </Nav.Link>
            <Nav.Link href="https://github.com/H5SH" target="_blank">
              <FaGithub className="text-light" />
            </Nav.Link>
            <Nav.Link href="mailto:tipuasad2001@gmail.com" target="_blank">
              <FaEnvelope className="text-light" />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/?next=%2F" target="_blank">
              <FaInstagram className="text-light" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="flex-grow-1">
        <FileList />
      </Container>
    </div>
  );
}

export default App;