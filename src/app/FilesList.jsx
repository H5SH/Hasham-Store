import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

// Logos
import pongLogo from './logos/pongLogo.png'
import childCareLogo from './logos/trachealLogo.jpg'

// Files
import chatting from './files/chatting-electron.exe'
import pong from './files/pong.love'
import childCare from './files/childrenCare.apk'


const files = [
  { name: 'Chatting', size: '100.97 MB', type: '.exe', details: 'A Next.js Application Converted to Desktop Application using Electron', url: chatting, logo: 'https://cdn.worldvectorlogo.com/logos/electron-4.svg' },
  { name: 'ChildrenCare', size: '723 MB', type: '.apk', details: 'Android App created in React Native, A guide on tracheostomy care in children', url: childCare, logo: childCareLogo },
  { name: 'Pong', size: '71 MB', type: '.love', details: 'My touch on Pong a game 1972, created in lua and love2d the game consist of both single player and multiplayer game play', url: pong, logo: pongLogo },
  // {name: 'MovieBrowser', size: 'NA', type: '.apk', details: 'Work Under Progress', url: '', logo: 'https://t4.ftcdn.net/jpg/05/00/61/19/360_F_500611919_5wuf1qGRCubiXXxIa7og1fLLCyHi6qP9.jpg'},
  // {name: 'Flappy', size: 'NA', type: '.love', details: 'My take a on flappy bird, the game awards you with madels on different milestones and contains random geration of levels, created in love2d', url: '', logo: 'https://www.wired.com/images_blogs/gamelife/2014/02/title.jpg'}
  // Add more files as needed
];

const FileList = () => {
  return (
    <Row>
      {files.map((file, index) => (
        <Col md={4} key={index} className="mb-4">
          <a href={file.url} type={file.type} download={`${file.name}${file.type}`} className="file-download-link">
            <Card className="file-card" style={file.name === 'Pong' ? {color:'white', backgroundImage: `url(${file.logo})`}:{ backgroundImage: `url(${file.logo})`, 
            backgroundSize: 'cover'}}>
              <Card.Body>
                <Card.Title >{file.name}</Card.Title>
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
