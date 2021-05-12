import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class inscription extends Component {

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
    this.setState({ name: e.target.value })
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

    axios.post('http://localhost:9000/Routes/RoutesUser/createUser', UserObject)
          .then(res => console.log(res.data))
    this.setState({
      pseudo: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Pseudo</Form.Label>
          <Form.Control type="text" value={this.state.pseudo} onChange={this.onChangeUserPseudo} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" value={this.state.password} onChange={this.onChangeUserPassword} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Creation utilisateur
        </Button>
      </Form>
    </div>);
  }
}
