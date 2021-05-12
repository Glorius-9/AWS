import React from 'react'
import { FaPowerOff, FaTrophy } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const NavBar = () => (
    
        <>
            <section className="container mainFont">
            <header className="jumbotron jumbotron-fluid align-items-end bg-dark text-white">
                <ul>
                <ul className="nav nav-tabs justify-content-end" style={{marginTop: '0%'}}>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/Home">Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/MarketPlace">MarketPlace</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Lancement">Lancement</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ListeAmi">Liste d'amis</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ModifierI">ModifierI</NavLink>
                        </li>
                    <ul>
                        <li className="nav justify-content-end">
                            <NavLink className="nav-link " to="/logout"><FaPowerOff/></NavLink>
                        </li>
                    </ul>

                </ul >
                    <div align="center">
                         <h1 className="display-6">Jeux de Combat <FaTrophy /></h1>
                    </div>
                   
                </ul>
            </header>
            </section>
        </>


    
)

export default NavBar