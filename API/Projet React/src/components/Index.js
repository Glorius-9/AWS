import React from 'react'
import { NavLink } from 'react-router-dom'



const index = () => (
    
    <div>
        <div>
            <header className="jumbotron jumbotron-fluid align-items-end bg-dark text-white" style={{marginTop: '0%'}}>
                <section className="container mainFont">
                    <h1 className="display-6">Bienvenue au Jeux de Combat <i className="fas fa-trophy" /></h1>
                    <p className="lead">A la fin il ne devra en rester qu'un !</p>
                </section>
            </header>
        </div>
        <div className="container mt-5" style={{marginLeft: '20%', marginRight: '20%'}}>
            <h1>Etes-vous déjà Membre?</h1>
            <NavLink to="/login" className="btn btn-primary">Login</NavLink>
            <NavLink to="/register" className="btn btn-danger">Register</NavLink>
        </div>
  </div>
)

export default index