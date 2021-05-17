import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import '../Game.css';

export default function Game({ leaveGame, game, color,}) {

  useEffect(() => {
    return () => leaveGame();
  }, []);


  const renderBoard = () => {
    return (
    <div>
        
    </div>
    );
  };

  const isGameStarted = () => game.numberOfPlayers === 2;

  const renderWaiting = () => {
    return (
      <Col>
        <div className="text-center">
          <h2 className="mb-4">{game.name}</h2>
          <div className="mb-4">
            <Spinner animation="border" role="status" />
          </div>
          <span>attente de l'adversaire!!!</span>
        </div>
      </Col>
    );
  };

  const renderGame = () => {
    return (
      <>
        <Col>
          <div className="text-center">vous etes :{color}</div>
          {renderBoard()}
        </Col>
      </>
    );
  };
  return (
    <Row>
      {!isGameStarted() && renderWaiting()}
      {isGameStarted() && renderGame()}
    </Row>
  );
}