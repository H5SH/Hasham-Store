import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

// import { saveAs } from 'file-saver';


const files = [
  { name: 'Chatting', size: '101 MB', type: '.exe', details: 'A Next.js Application Converted to Desktop Application using Electron', url: 'https://github.com/H5SH/Hasham-projects/tree/main/public/files/chatting-electron.exe', logo: 'https://cdn.worldvectorlogo.com/logos/electron-4.svg', style: {} },
  { name: 'ChildrenCare', size: '689 MB', type: '.apk', details: 'Android App created in React Native, A guide on tracheostomy care in children', url: 'https://github.com/H5SH/Hasham-projects/tree/main/public/files/childrenCare.apk', logo: 'logos/trachealLogo.jpg', style: {} },
  { name: 'Pong', size: '71 KB', type: '.love', details: 'My touch on Pong a game 1972, created in lua and love2d the game consist of both single player and multiplayer game play', url: 'files/pong.love', logo: 'logos/pongLogo.png', style: {} },
  { name: 'MovieBrowser', size: 'NA', type: '.apk', details: 'Work Under Progress', url: '', logo: 'https://t4.ftcdn.net/jpg/05/00/61/19/360_F_500611919_5wuf1qGRCubiXXxIa7og1fLLCyHi6qP9.jpg', style: {} },
  { name: 'Flappy', size: '12 MB', type: '.love', details: 'My take a on flappy bird, the game awards you with madels on different milestones and contains random geration of levels, created in love2d', url: 'files/flappy.love', logo: 'https://www.wired.com/images_blogs/gamelife/2014/02/title.jpg', style: {} },
  { name: 'AttendanceSystem', size: '50 MB', type: '.pt', details: 'yoloV8 trained on custom dataset for the purpose of face recognization Attendace system', url: 'files/yolov8m_custom.pt', logo: 'https://assets-global.website-files.com/646dd1f1a3703e451ba81ecc/664f72537d932bad2865e9d0_Ultralytics_Website.jpg', style: {} },
  { name: 'tic-tac-toe', size: '30 MB', type: '.zip', details: 'Tic-Tac-Toe, Ai as your competition, uses min max algorithum to compute the next best box either for blocking or achieving victory (extract from zip file then run the runner.exe)', url: 'files/tic-tac-toe.zip', logo: 'https://play-lh.googleusercontent.com/sZS1Ea6_NN2-yyNyhOdc-u_TPq4d49q3qMsNfo1OsemxtID18-2y9OtW9pt_SevZF-wN', style: { backgroundSize: 'cover' } },
  {name: 'Breakout', size: '6.1 MB', type: '.love', details: 'Breakout Recreated in lua Love2d To get The understanding of Quads, game includes 4 power ups a lock block and highscore state', url: 'files/breakout.love', logo: 'logos/breakout.png', style: {color: 'white'}}
  // Add more files as needed
];

const FileList = () => {
  return (
    <Row>
      {files.map((file, index) => (
        <Col md={4} key={index} className="mb-4">
          <a href={file.url} type={file.type} download={`${file.name}${file.type}`} className="file-download-link">
            <Card className="file-card"
              style={file.name === 'Pong' || file.name.includes('tic') ?
                { color: 'white', backgroundImage: `url(${file.logo})`, ...file.style} :
                { backgroundImage: `url(${file.logo})`, backgroundSize: 'cover', ...file.style }}>
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
