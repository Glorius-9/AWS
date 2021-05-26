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

<<<<<<< HEAD

const ENDPOINT = 'https://glorius9.herokuapp.com/';
=======
const ENDPOINT = 'http://10.21.2.107:4000';
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token;

  const [games, setGames] = useState([]);
<<<<<<< HEAD
=======
  const [color, setColor] = useState('');
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
  const [game, setGame] = useState({ board: []});
  const [gameId, setGameId] = useState(null);
  const [socket, setSocket] = useState(null);


  const logoutHandler = event => {
    event.preventDefault()
    logout()
    history.push('/')
  }

<<<<<<< HEAD
=======
  const MarketHandler = event => {
    event.preventDefault()
    
  }

>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
  const joinGame = (gameId) => {
    socket.emit('join-game', gameId);
    setGameId(gameId);
  };

<<<<<<< HEAD
  const action = ({ selectedPiece, destination }) => {
    socket.emit('action', {
      selectedPiece,
=======
  const movePlayer = ({ selectedPlayer, destination }) => {
    socket.emit('move-piece', {
      selectedPlayer,
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
      destination,
    });
  };

<<<<<<< HEAD

=======
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
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
<<<<<<< HEAD
=======
      setColor('');
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
      alert('le serveur à craché!');
    });
    newSocket.on('games', (games) => {
      setGames(games);
    });
    newSocket.on('your-game-created', (gameId) => {
      setGameId(gameId);
    });
<<<<<<< HEAD
=======
    newSocket.on('color', (color) => setColor(color));
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
    newSocket.on('winner', (winner) => {
      alert(`${winner} has won the game!`);
      history.push('/lobby')
    });
    setSocket(newSocket);
  }, []);
<<<<<<< HEAD
=======

>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
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
<<<<<<< HEAD
                      <Nav.Link to="/" as={NavLink} onClick={leaveGame}>Quitter le jeux</Nav.Link>
=======
                      <Nav.Link to="/lobby" as={NavLink}>Menu</Nav.Link>
                      <Nav.Link to="/Market" as={NavLink} onClick={MarketHandler}>Market</Nav.Link>
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
                      <Nav.Link to="/" as={NavLink} onClick={logoutHandler}>Se deconnecter</Nav.Link>
                  </Nav>
              </Navbar>
              <Switch>
                  <Route render={()=> <Lobby games={games} joinGame={joinGame}/>} path="/lobby" exact />
                  <Route render={()=> <CreateNewGame createGame={createGame} />} path="/create-game" exact />
<<<<<<< HEAD
                  <Route render={()=> <Game game={game} leaveGame={leaveGame} action={action} socket={socket}/>} path="/game" exact />
                  <Redirect to="/lobby"/>
=======
                  <Route render={()=> <Game color={color} game={game} leaveGame={leaveGame} movePlayer={movePlayer} socket={socket}/>} path="/game" exact />
                  <Redirect to="/lobby" />
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
              </Switch>
            </Router>
          )}
          {isAuthenticated === false && (
            <Router>
              <Switch>
                <Route path="/" exact>
                  <AuthPage />
                </Route>
<<<<<<< HEAD
                <Redirect to="/"/>
=======
                <Redirect to="/" />
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
              </Switch>
            </Router>
          )}
        </AuthContext.Provider>
    </>
  );
}

export default App;