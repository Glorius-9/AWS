import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';



export default class Login extends React.Component {

  constructor(props) {

    super(props)

    // Setting up functions
    this.onChangeUserPseudo = this.onChangeUserPseudo.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      pseudo: '',
      password: ''
    }
  }
  

  onChangeUserPseudo(e) {
    this.setState({ pseudo: e.target.value })
  }

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    
    
    const UserObject = {
      pseudo: this.state.pseudo,
      password: this.state.password
    };

    axios.post('http://localhost:9000/Users/Login', UserObject)
          .then(res => console.log(res.data))
    this.setState({
      pseudo: '',
      password: ''
    });
  }
    render() {
        return (
            <>
            <div align="center">
            <header className="jumbotron jumbotron-fluid align-items-end bg-dark text-white" style={{marginBottom: '10%'}}>
                <section className="container mainFont">
                    <h1 className="display-6">Jeux de Combat <i className="fas fa-trophy" /></h1>
                    <p className="lead"></p>
                </section>
            </header>
            <div>
            <div>
      <main className="container mb-3">
      <div className="row">
        <aside id="warriorSide" className="col-sm-12 col-md-4 border border-dark">
        <div style={{marginLeft: '0%', marginRight: '0%'}}>
                    <h3 className="font-weight-bold secondFont mt-2 text-center">Etes vous membre?</h3>
                    <p className="font-italic text-center">Connectez vous</p>
                    <form onSubmit={this.onSubmit} action="login" method="POST">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.pseudo} onChange={this.onChangeUserPseudo} aria-describedby="emailHelp" name="pseudo" placeholder="Pseudo" required /><br/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" value={this.state.password} onChange={this.onChangeUserPassword} name="password" placeholder="Password" required /><br/>
                        </div>
                        <div>
                            <div>
                                <button type="submit" className="btn btn-primary">Se Connecter</button>
                                <button type="button" className="btn btn-secondary"><NavLink to="/register">S'inscrire</NavLink></button>
                            </div>   
                        </div>  
                     </form>
                </div>

        </aside>
        <section className="col-sm-8 col-md-8 bg-light px-5" id="board">
           <div className="d-flex">
            <aside id="warriorSide" className="w-50 justify-content-start align-items-start" ALIGN="center">
              </aside>
             </div>
              </section>
          </div>
      </main>

      </div>

            </div>
    
            </div>
            
        </>

        )
    }
}
   







