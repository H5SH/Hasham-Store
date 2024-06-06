// src/FileList.js
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';


const files = [
  { name: 'Project1.exe', size: '15 MB', type: 'Executable', details: 'Windows executable for Project 1', url: '/path/to/Project1.exe', logo: './logo192.png' },
  { name: 'Project2.apk', size: '25 MB', type: 'Android Package', details: 'Android APK for Project 2', url: '/path/to/Project2.apk', logo: '/path/to/logo2.png' },
  { name: 'Project3.love', size: '10 MB', type: 'Game File', details: 'LOVE2D game file for Project 3', url: '/path/to/Project3.love', logo: '/path/to/logo3.png' },
  // Add more files as needed
];

const FileList = () => {
  return (
    <Row>
      {files.map((file, index) => (
        <Col md={4} key={index} className="mb-4">
          <a href={file.url} download={file.name} className="file-download-link">
            <Card className="file-card" style={{ backgroundImage: `url(${file.logo})` }}>
              <Card.Body>
                <Card.Title>{file.name}</Card.Title>
                <Card.Text>Size: {file.size}</Card.Text>
                <Card.Text>Type: {file.type}</Card.Text>
                <div className="file-details">
                  <p>{file.details}</p>
                </div>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default FileList;
