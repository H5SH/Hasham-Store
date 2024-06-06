import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const files = [
  { name: 'App Installer', type: '.exe', size: '25 MB', link: '/path/to/your/app-installer.exe' },
  { name: 'Android App', type: '.apk', size: '15 MB', link: '/path/to/your/android-app.apk' },
  { name: 'Love2D Game', type: '.love', size: '5 MB', link: '/path/to/your/game.love' },
];

const FileList = () => {
  return (
    <Container>
      <Row className="mt-5">
        {files.map((file, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>{file.name}</Card.Title>
                <Card.Text>
                  <strong>Type:</strong> {file.type}<br />
                  <strong>Size:</strong> {file.size}
                </Card.Text>
                <Button variant="primary" href={file.link} download>
                  Download
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FileList;
