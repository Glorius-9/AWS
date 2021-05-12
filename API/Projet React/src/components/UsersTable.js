import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  trash, FaPencilAlt } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

export default class UserTable extends Component {

    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser() {
        axios.delete('http://localhost:9000/students/deleteUser/' + this.props.obj._id)
            .then((res) => {
                console.log('User successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.pseudo}</td>
                <td>{this.props.obj.email}</td>
                <td>
                    <Link className="edit-link" to={"/editUser/" + this.props.obj._id}>
                    <FaPencilAlt />
                    </Link>

                    <Link onClick={this.deleteUser} > <trash />  </Link>
                    
                   
                    
                </td>
            </tr>
        );
    }
}

//<Button onClick={this.deleteUser} size="sm" variant="danger">Supprimer</Button>