import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import '../Game.css';
import img from "../bg.gif"

export default function Game({ leaveGame, game, color,}) {

  useEffect(() => {
    return () => leaveGame();
  }, []);


  const renderBoard = () => {
    return (
    <div style={{ backgroundImage: `url(${img})` }}>
      <center>
        <Game2 />
      </center>
        
    </div>
    );
  };

  const isGameStarted = () => game.numberOfPlayers === 1;

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
          <div className="text-center">vous etes connecté à la partie</div>
          {renderBoard()}
        </Col>
      </>
    );
  };
  return (
    <Row>
      {renderGame()}
    </Row>
  );
}
//-----------------------------------




class Joueur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: Array(5).fill(null),
    };
  }

  
 handleClick_A(){
    this.props.onClick_A(); 
  }
  handleClick_D(){
    this.props.onClick_D()
  }
  handleClick_H(){
    this.props.onClick_H()
  }
  handleClick_S(){
    this.props.onClick_S()
  }
  handleClick_Ant(){
    this.props.onClick_Ant()
  }

  handleClick_FT(){
    this.props.onClick_FT()
  }

  render() {
    return (
      <div>
        <div className="status" style={{ color: 'red' }}>
          {this.props.name}</div>
        <div style={{ color: 'red' }}>{'<'}{this.props.description}{'>'}</div>
        <div style={{ color: 'red' }}>HP:{this.props.hp}</div>
        <div className="Joueur-row">
          <button disabled={this.props.Cdsjoueur[0]===0 && !this.props.disabled ? false : true} type="A" onClick={() => this.handleClick_A()}>A{this.state.cds}</button>
          <button disabled={this.props.Cdsjoueur[1]===0 && !this.props.disabled ? false : true} type="D" onClick={() => this.handleClick_D()}>D</button>
          <button disabled={this.props.Cdsjoueur[2]===0 && !this.props.disabled ? false : true} type="H" onClick={() => this.handleClick_H()}>H</button>
          <button disabled={this.props.Cdsjoueur[3]===0 && !this.props.disabled ? false : true} type="S" onClick={() => this.handleClick_S()}>S</button>
          <button disabled={this.props.Cdsjoueur[4]===0 && !this.props.disabled ? false : true} type="Ant" onClick={() => this.handleClick_Ant()}>Ant</button>
          <button onClick={() => (this.handleClick_FT())}>Fin de tour</button>
        </div>
        
      </div>
    );
  }
}
//========================================================================================================
class Game2 extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      joueurs: Array(2).fill(null),
      action1: [0,0,0,0,0], //action du joueur 1
      action2: [0,0,0,0,0], //action du joueur 2
      cds1 : [0,0,0,0,0], //temps de recherche du joueur 1
      cds2 : [0,0,0,0,0], //temps de recherche du joueur 2
      hpJ1 : 100,
      hpJ2 : 100,
      J1disabled : false, //dsactivé le joueur1
      J2disabled : false,//dsactivé le joueur2
      FinTJ1 : false, //Fin du tour du joueur1
      FinTJ2 : false, //Fin du tour du joueur1
      Tour : 0,
      test :0
      
    };
  }
  

  handleClick_A(joueur)
  {
    joueur===1 ?
    this.setState({action1 : [1,0,0,0,0]})
    :
    this.setState({action2 : [1,0,0,0,0]})
    console.log(this.state.action1,joueur)
  }

  handleClick_D(joueur)
  {
    joueur===1 ?
    this.setState({action1 : [0,1,0,0,0]})
    :
    this.setState({action2 : [0,1,0,0,0]})
  }
 
  handleClick_H(joueur)
  {
    joueur===1 ?
    this.setState({action1 : [0,0,1,0,0]})
    :
    this.setState({action2 : [0,0,1,0,0]})
  }
 
  handleClick_S(joueur)
  {
    joueur===1 ?
    this.setState({action1 : [0,0,0,1,0]})
    :
    this.setState({action2 : [0,0,0,1,0]})
  }
  handleClick_Ant(joueur)
  {
    joueur===1 ?
    this.setState({action1 : [0,0,0,0,1]})
    :
    this.setState({action2 : [0,0,0,0,1]})
  }
 
  handleClick_FT()
  {
    console.log('Le joueur 1 a fini sont tour')
    this.setState({J1disabled : true})
    this.setState({FinTJ2: true})
  }

  handleClick_FT2()
  {
    console.log('Le joueur 2 a fini sont tour')
    this.setState({J2disabled : true})
    this.setState({FinTJ1: true})
  }

  
NextTour()
  {

    this.setState({FinTJ1: false})
    this.setState({FinTJ2: false})
    this.setState({J2disabled : false})
    this.setState({J1disabled : false})
  }
 
 FinTour(props) 
 { // function appeler quand les deux joueurs auron fini leur tour

  const ReStar=
  (
    <div>ca marche</div>
  )
  const EvalTour=
    (
      <div>Tour : Evaluation du tour </div>
    )
   return (
    props.joueur1Tour && props.joueur2Tour === true ? 
    <div>
      {
      <p>Fin de tour ! {props.action1} {props.action2} {} </p>
      //EvalTour,
      //ReStar,
      //props.reset()
      }
    </div> 
    ://else
    <div>
      {
        <p>Tour en cours {props.action1} {props.action2}</p>
      } 
    </div>
   );
  }

 

  render() 
  {
    return (
      <div className="game">
        <div className="game-Joueur">
          <Joueur disabled={this.state.J1disabled} name="Joueur 1" description="Blablablablabla blabla, blalabla " hp = {this.state.hpJ1} 
          onClick_A={() => this.handleClick_A(1)} 
          onClick_D={() => this.handleClick_D(1)}
          onClick_H={() => this.handleClick_H(1)}
          onClick_S={() => this.handleClick_S(1)}
          onClick_Ant={() => this.handleClick_Ant(1)}
          onClick_FT={() => this.handleClick_FT(1)}
          Cdsjoueur={this.state.cds1}
          />
          <br />
          <br />
          <div style={{ color: 'red' }}>
            {
              this.state.FinTJ1 && this.state.FinTJ2 === true ?
              <div >
              <p>Fin tour</p>
              <button onClick={()=>this.NextTour()}>NextTour</button>
              </div>
              :
              <p>Tour en cours . . .</p>
              
            }
          </div>
          <br />
          <br />
          <Joueur disabled={this.state.J2disabled} name="Joueur 2" description="J'ai les chats , des boules de poiles" hp = {this.state.hpJ2}    
          onClick_A={() => this.handleClick_A(2)} 
          onClick_D={() => this.handleClick_D(2)}
          onClick_H={() => this.handleClick_H(2)}
          onClick_S={() => this.handleClick_S(2)}
          onClick_Ant={() => this.handleClick_Ant(2)}
          onClick_FT={() => this.handleClick_FT2(2)}
          Cdsjoueur={this.state.cds2}
          />
        </div>
        <div className="game-info">
        </div>
      </div>
    );
  }
}



///<this.FinTour joueur1Tour={this.state.FinTJ1} joueur2Tour={this.state.FinTJ2 } n={this.state.n} action1={this.state.action1} action2={this.state.action2} nTour={this.state.Tour} 
//reset={() => this.reset()} />