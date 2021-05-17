import React, { useEffect, useState} from 'react';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { NavLink} from 'react-router-dom';
import io from 'socket.io-client';
import CreateNewGame from './components/CreateNewGame';
import Lobby from './components/Lobby';
import Game from './components/Game';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import createHistory from 'history/createBrowserHistory';

import { useAuth } from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext'
import {AuthPage} from './pages/AuthPage'

const history = createHistory(); 

const ENDPOINT = 'http://10.21.2.107:4000';

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token;

  const [games, setGames] = useState([]);
  const [color, setColor] = useState('');
  const [game, setGame] = useState({ board: []});
  const [gameId, setGameId] = useState(null);
  const [socket, setSocket] = useState(null);


  const logoutHandler = event => {
    event.preventDefault()
    logout()
    history.push('/')
  }

  const MarketHandler = event => {
    event.preventDefault()
    
  }

  const joinGame = (gameId) => {
    socket.emit('join-game', gameId);
    setGameId(gameId);
  };

  const movePlayer = ({ selectedPlayer, destination }) => {
    socket.emit('move-piece', {
      selectedPlayer,
      destination,
    });
  };

  useEffect(() => {
    const game = games.find((g) => g.id === gameId);
    if (!game) {
      setGame({
        board: [],
      });
    } else {
      setGame(game);
    }
  }, [games, gameId]);

  const leaveGame = () => {
    socket.emit('leave-game');
    history.push('/lobby')
  };

  const createGame = (name) => {
    socket.emit('create-game', name);
  };

  useEffect(() => {
    const newSocket = io(ENDPOINT);
    newSocket.on('disconnect', () => {
      setGameId(null);
      setColor('');
      alert('le serveur à craché!');
    });
    newSocket.on('games', (games) => {
      setGames(games);
    });
    newSocket.on('your-game-created', (gameId) => {
      setGameId(gameId);
    });
    newSocket.on('color', (color) => setColor(color));
    newSocket.on('winner', (winner) => {
      alert(`${winner} has won the game!`);
      history.push('/lobby')
    });
    setSocket(newSocket);
  }, []);

  return (
    <>
        <AuthContext.Provider value={{
          token, login, logout, userId, isAuthenticated
        }}>
          {isAuthenticated === true && (
            <Router>
              <Navbar bg="dark" className="mb-4" variant="dark">
                  <Navbar.Brand href="/lobby">CombatGame</Navbar.Brand>
                  <Nav className="mr-auto">
                      <Nav.Link to="/lobby" as={NavLink}>Menu</Nav.Link>
                      <Nav.Link to="/Market" as={NavLink} onClick={MarketHandler}>Market</Nav.Link>
                      <Nav.Link to="/" as={NavLink} onClick={logoutHandler}>Se deconnecter</Nav.Link>
                  </Nav>
              </Navbar>
              <Switch>
                  <Route render={()=> <Lobby games={games} joinGame={joinGame}/>} path="/lobby" exact />
                  <Route render={()=> <CreateNewGame createGame={createGame} />} path="/create-game" exact />
                  <Route render={()=> <Game color={color} game={game} leaveGame={leaveGame} movePlayer={movePlayer} socket={socket}/>} path="/game" exact />
                  <Redirect to="/lobby" />
              </Switch>
            </Router>
          )}
          {isAuthenticated === false && (
            <Router>
              <Switch>
                <Route path="/" exact>
                  <AuthPage />
                </Route>
                <Redirect to="/" />
              </Switch>
            </Router>
          )}
        </AuthContext.Provider>
    </>
  );
}

export default App;