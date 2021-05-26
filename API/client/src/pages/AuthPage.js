import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
<<<<<<< HEAD
import img from "../bg.gif"
=======
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({email:'', password:''})

<<<<<<< HEAD
=======

>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
  useEffect(()=>{
    message(error)
    clearError()
  }, [error, message, clearError])

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }
  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {}
  }


  return (
<<<<<<< HEAD
    <>
      
    <div id="main-container" className="container-fluid"> 
=======
    <div id="main-container" className="container-fluid">
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
    <div className="row">
        <div id="auth-form" className="card border-dark">
        <h5 className="card-header bg-dark text-white" align="center">jeux de Combat en ligne</h5>
        <div className="card-body">
            <form className="panel-body">
            <div className="input-group">
                <input 
                    type="text" 
                    id="login" 
                    name="email"
                    className="form-control" 
                    placeholder="Email"
                    onChange={changeHandler}
                />
            </div>
            <div className="input-group">
                <input 
                    type="password" 
                    id="password"
                    name="password" 
                    className="form-control" 
                    placeholder="Password"
                    onChange={changeHandler}
                />
            </div>
            <div className="buttons-group">
                <button 
                    type="button" 
                    className="btn btn-dark"
                    disabled={loading}
                    onClick={loginHandler}
                >
<<<<<<< HEAD
                    Se Connecter</button>
=======
                    Login</button>
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
                <button 
                    type="button"
                    className="btn btn-dark"
                    onClick={registerHandler}
                    disabled={loading}
<<<<<<< HEAD
                >S'inscrire</button>
=======
                >Register</button>
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
<<<<<<< HEAD
    </>
=======
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
  )
}
