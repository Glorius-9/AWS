import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Home from '../Pages/Home'
import MarketPlace from '../Pages/MarketPlace'
import Lancement from '../Pages/Lancement'
import ListeAmi from '../Pages/ListeAmi'
import ModifierI from './ModifierI'
import Login from './Login'
import index from './Index'
import Register from '../Pages/Register'


class App extends React.Component{
    render(){
        return(
            <section id="todo">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={index} />
                        <Route path="/Login" exact component={Login} />
                        <Route path="/Register" exact component={Register}/>
                        <Route path="/Home" exact component={Home} />
                        <Route path="/MarketPlace" exact component={MarketPlace} />
                        <Route path="/Lancement" exact component={Lancement} />
                        <Route path="/ListeAmi" exact component={ListeAmi} />
                        <Route path="/ModifierI" exact component={ModifierI} />
                    </Switch>
                </BrowserRouter>
            </section>
        )
    }
}

export default App