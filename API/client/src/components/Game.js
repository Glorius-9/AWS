import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import '../Game.css';
<<<<<<< HEAD
import chat from './chat';
import io from 'socket.io-client';


export default function Game({ leaveGame, game, name}) {
  const [selectedPiece, setSelectedPiece] = useState({});
=======
import img from "../bg.gif"

export default function Game({ leaveGame, game, color,}) {

>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
  useEffect(() => {
    return () => leaveGame();
  }, []);

<<<<<<< HEAD
  const selectPiece = (a) => {
    if (game.turn !== name) return;
    setSelectedPiece();
  };

  

  const renderBoard = () => {
    return (
      <div>
        <center>
       <Games/>
      </center> 
      </div> 
    );
  };

  const isGameStarted = () => game.numberOfPlayers === 2;
=======

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
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff

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
<<<<<<< HEAD
=======
          <div className="text-center">vous etes connecté à la partie</div>
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
          {renderBoard()}
        </Col>
      </>
    );
  };
  return (
    <Row>
<<<<<<< HEAD
       {!isGameStarted() && renderWaiting()}
       {isGameStarted() && renderGame()} 
=======
      {renderGame()}
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
    </Row>
  );
}
//-----------------------------------

<<<<<<< HEAD
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
var entier = entierAleatoire(1, 20);

function entierAleatoireB(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
var entierB = entierAleatoireB(1, 20);




class Games extends React.Component{
  constructor(props){
      super(props);
      this.state={
          nom_a: "Perso_A",
          force_a: 0,
          vie_a: 100,
          nom_b: "Perso_B",
          force_b: 0,
          vie_b: 100,
          tour_joueur : 'a'
      }
      this.frapper = this.frapper.bind(this);
      this.dormir = this.dormir.bind(this);
      this.reset = this.reset.bind(this);
  }
  reset(){
      document.location.reload(true);
  }
  
  frapper(event){
      if(this.state.tour_joueur === 'a'){
          this.setState(
              state => ({force_a: state.force_a +entier, vie_b: state.vie_b -entier, tour_joueur: 'b'})
      );
      }else{
          this.setState(
              state => ({force_b: state.force_b +entierB, vie_a: state.vie_a -entierB, tour_joueur: 'a'})
          );
      }
  }
  dormir(){
      if(this.state.tour_joueur === 'a'){
          this.setState(
              state => ({force_a: state.force_a -entier, vie_a: state.vie_a +entier, tour_joueur: 'b'})
          );
      }else{
          this.setState(
              state => ({force_b: state.force_b -entierB, vie_b: state.vie_b +entierB, tour_joueur: 'a'})
          );
      }
  }
  render(){
      if(this.state.tour_joueur === 'a'){
          var tour = "Tour : Joueur A"
          var classeA ="btn btn-primary w-100 mb-3 ";
          var classeB ="d-none";
      }else{
          var tour = "Tour : Joueur B"
          var classeA ="d-none";
          var classeB ="btn btn-primary w-100 mb-3";
      }
      if(this.state.vie_a <= 0){
          var classeA ="btn btn-primary w-100 mb-3 disabled";
          var classeB ="btn btn-primary w-100 mb-3 disabled";
          var gagne ="Le joueur B à gagner"
          var tour='';
          var elem = document.getElementById("carte_joueur");
          var diabled=true
      }
      if(this.state.vie_b <= 0){
          var classeA ="btn btn-primary w-100 mb-3 disabled";
          var classeB ="btn btn-primary w-100 mb-3 disabled";
          var gagne ="Le joueur A à gagner"
          var tour='';
          var elem = document.getElementById("carte_joueur");
          var diabled=true
      }

      if(this.state.vie_a > 50){
          var classeVieA ="progress-bar bg-success";
      }
      if(this.state.vie_a <= 50){
          var classeVieA ="progress-bar bg-warning";
      }

      if(this.state.vie_a < 40){
          var classeVieA ="progress-bar bg-danger";
      }

      if(this.state.vie_b > 50){
          var classeVieB ="progress-bar bg-success";
      }

      if(this.state.vie_b <= 50){
          var classeVieB ="progress-bar bg-warning";
      }

      if(this.state.vie_b < 40){
          var classeVieB ="progress-bar bg-danger";
      }


      const divStyleA = {
          width: this.state.vie_a+'%',
        };

        const divStyleB = {
          width: this.state.vie_b+'%',
        };
      return(
      <React.Fragment align="center">
       <div className="col-12">
        <h1 className="text-success">{gagne}</h1>
        <h1>{tour}</h1>
      </div>
      <div id="carte_joueur" class="row mx-auto"> 
          <div className="card col-4 mt-1">
                  <img src="https://media.giphy.com/media/tgWX6N4nHQjNC/giphy.gif" className="card-img-top" alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title">{this.state.nom_a}</h5>
                      <p className="card-text">
                      <ul className="list-unstyled">
                          <li>
                              <div className="progress">
                                  <div className={classeVieA} role="progressbar" style={divStyleA} aria-valuenow={this.state.vie_a} aria-valuemin="0" aria-valuemax="100">{this.state.vie_a}%</div>
                              </div>
                          </li>
                          <li>
                              Force : {this.state.force_a} 
                          </li>
                          </ul>
                      </p>
                      <button disabled ={diabled} className={classeA} onClick={this.frapper}>Attack</button>
                      <button disabled ={diabled} className={classeA}  onClick={this.dormir}>Defense</button>
                  </div>
          </div>

          <div  className="card col-4 mt-1" >
                  <img src="https://66.media.tumblr.com/e36d4244b23330c10dd3c01d378832d5/tumblr_mw3rurB3751s20ivko1_500.gif" className="card-img-top" alt="..."/>
                  <div className="card-body" align="center">
                      <h5 className="card-title">{this.state.nom_b}</h5>
                      <p className="card-text">
                      <ul className="list-unstyled">
                          <li>
                              <div className="progress">
                                  <div className={classeVieB} role="progressbar" style={divStyleB} aria-valuenow={this.state.vie_b} aria-valuemin="0" aria-valuemax="100">{this.state.vie_b}%</div>
                              </div>
                          </li>
                          <li>
                              Force : {this.state.force_b} 
                          </li>
                          </ul>
                      </p>
                      <button disabled ={diabled} className={classeB} onClick={this.frapper}>Attack</button>
                      <button disabled ={diabled} className={classeB}  onClick={this.dormir}>Defense</button>
                  </div>
          </div>
          <div>
            {chat}
          </div>
      </div>
      </React.Fragment>
      )
=======



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
    ///Reduire le coldown
    var i;
    for(i=0;i<5;i++)
    {
      if(this.state.action1[i]==0)
      {
        this.setState({cds1: this.state.cds1.map((cd)=> cd!=0 ? cd-1 : 0)})
        console.log("Je suis là")
      }
        
    }

   this.setState({cds1: this.state.action1})
   this.setState({cds2: this.state.action2})
    this.setState({FinTJ1: false})
    this.setState({FinTJ2: false})
    this.setState({J2disabled : false})
    this.setState({J1disabled : false})
    
    const j1Attack = (this.state.action1[0]===1 ? true :false)
    const j2Attack = (this.state.action2[0]===1 ? true :false)
    const j1Def = (this.state.action1[1]===1 ? true :false)
    const j2Def = (this.state.action2[1]===1 ? true :false)
    const j1Heal = (this.state.action1[2]===1 ? true :false)
    const j2Heal = (this.state.action2[2]===1 ? true :false)
    const j1Stun = (this.state.action1[3]===1 ? true :false)
    const j2Stun = (this.state.action2[3]===1 ? true :false)
    const j1Ant = (this.state.action1[4]===1 ? true :false)
    const j2Ant = (this.state.action2[4]===1 ? true :false)
    //coldown
    j1Stun ? this.setState({action1: [0,0,0,3,0]}) :
    j2Stun ? this.setState({action2: [0,0,0,3,0]}) :
    j1Attack ? this.setState({action1: [1,0,0,0,0]}) :
    j2Attack ? this.setState({action2: [1,0,0,0,0]}) :
    j1Def ? this.setState({action1: [0,1,0,0,0]}) :
    j2Def ? this.setState({action2: [0,1,0,0,0]}) :
    j1Heal ? this.setState({action1: [0,0,2,0,0]}) :
    j2Heal ? this.setState({action2: [0,0,2,0,0]}) :
    j1Ant ? this.setState({action2: [0,0,0,0,5]}) :
    j2Ant ? this.setState({action2: [0,0,0,0,5]}) :
    this.setState({cds1: this.state.action1})
   this.setState({cds2: this.state.action2})

    this.setState({action1 : [0,0,0,0,0]})
    this.setState({action2 : [0,0,0,0,0]})
    j1Attack && !j2Def && !j2Ant && !j2Stun ? this.setState({hpJ2 :this.state.hpJ2-10}) : console.log("attack fail")
    j2Attack && !j1Def && !j1Ant && !j1Stun ? this.setState({hpJ1 :this.state.hpJ1-10}) : console.log("attack fail")
    j1Stun && !j2Stun && !j2Def ? this.setState({cds2 : this.state.cds2.map((cd)=> cd+1 )}) : console.log("Stun fail")
    j2Stun && !j1Stun && !j1Def ? this.setState({cds1 : this.state.cds1.map((cd)=> cd+1 )}) :console.log("Stun fail")
    j1Heal && !j2Stun ? this.setState({hpJ1 :this.state.hpJ1+10}) :  console.log("Heal fail")
    j2Heal && !j1Stun ? this.setState({hpJ2 :this.state.hpJ2+10}) : console.log("Heal fail")

    
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
          <Joueur disabled={this.state.J1disabled} name="EL wiz" description="Force et honneur" hp = {this.state.hpJ1} 
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
          <div style={{ color: 'blue' }}>
            {
              this.state.FinTJ1 && this.state.FinTJ2 === true ?
              <div >
              <p>Fin tour</p>
              <button onClick={()=>this.NextTour()}>NextTour</button>
              </div>
              :
              <p>Tour en cours . . .,
              <br/>,
              Joueur1 : {this.state.action1},
              <br/>,
              Joueur2 : {this.state.action2}</p>

              
            }
          </div>
          <br />
          <br />
          <Joueur disabled={this.state.J2disabled} name="Rambel" description="gloire et victoire" hp = {this.state.hpJ2}    
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
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
  }
}


<<<<<<< HEAD
=======

///<this.FinTour joueur1Tour={this.state.FinTJ1} joueur2Tour={this.state.FinTJ2 } n={this.state.n} action1={this.state.action1} action2={this.state.action2} nTour={this.state.Tour} 
//reset={() => this.reset()} />
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
