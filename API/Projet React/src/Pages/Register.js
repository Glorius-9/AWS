import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';



  export default class Register extends React.Component {
     

  constructor(props) {

    super(props)

    // Setting up functions
    this.onChangeUserPseudo = this.onChangeUserPseudo.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      pseudo: '',
      email: '',
      password: ''
    }
  }
  

  onChangeUserPseudo(e) {
    this.setState({ pseudo: e.target.value })
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    
    
    const UserObject = {
      pseudo: this.state.pseudo,
      email: this.state.email,
      password: this.state.password
    };

    axios.post('http://localhost:9000/Users/createUser', UserObject)
          .then(res => console.log(res.data))
    this.setState({
      pseudo: '',
      email: '',
      password: ''
    });
  }

    render(){

    return(
            <>
                <div align="center">
                    <header className="jumbotron jumbotron-fluid align-items-end bg-dark text-white" style={{marginBottom: '5%'}}>
                        <section className="container mainFont">
                            <h1 className="display-6">Jeux de Combat <i className="fas fa-trophy" /></h1>
                            <p className="lead"></p>
                        </section>
                    </header>
                </div>

            <div className="container mt-5">
                    <form  onSubmit={this.onSubmit} method="POST" style={{marginLeft: '35%', marginRight: '35%'}}>
                        <h3 className="font-weight-bold secondFont mt-2 text-center">Inscription</h3>
                            <p className="font-italic text-center">les champs sont obligatoire!</p>
                                    <div className="form-group">
                                        <input type="text" name="pseudo" className="form-control" value={this.state.pseudo} onChange={this.onChangeUserPseudo} aria-describedby="emailHelp" placeholder="Pseudo"   /><br/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.onChangeUserEmail} aria-describedby="emailHelp" placeholder="Email" required /><br/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onChangeUserPassword} placeholder="Password"  /><br/>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary">S'inscrire</button><t/>
                                        <button type="button" className="btn btn-secondary"><NavLink to="/Login">Se Connecter</NavLink></button>
                                    </div>   
                    </form>
                </div>
            </>);
    }
  }
