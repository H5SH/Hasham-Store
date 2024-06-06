// src/App.js
import React from 'react';
import './App.css';
import FileList from './app/FilesList';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">Downloadable Files</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="https://www.linkedin.com/in/yourprofile" target="_blank">
              <FaLinkedin className="text-light" />
            </Nav.Link>
            <Nav.Link href="https://github.com/yourusername" target="_blank">
              <FaGithub className="text-light" />
            </Nav.Link>
            <Nav.Link href="mailto:your.email@example.com" target="_blank">
              <FaEnvelope className="text-light" />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/yourusername" target="_blank">
              <FaTwitter className="text-light" />
            </Nav.Link>
            <Nav.Link href="https://facebook.com/yourusername" target="_blank">
              <FaFacebook className="text-light" />
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
