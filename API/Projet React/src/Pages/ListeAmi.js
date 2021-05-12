
import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import NavBar from './NavBar'
import UserTable from '../components/UsersTable';


export default class ListeAmi extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Users: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:9000/Users/listUser')
      .then(res => {
        this.setState({
          Users: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.Users.map((res, i) => {
      return <UserTable obj={res} key={i} />;
    });
  }

  render() {
    return (
    <>
      <div>
      <NavBar/>
    </div>
    <div>
        <main className="container mb-3">
            <div className="row">
                <aside id="battleScript" className="col-sm-12 col-md-4 border border-dark">
                <h3 className="font-weight-bold secondFont mt-2 text-center">Informations</h3>
                <p className="font-italic text-center">Dispo</p>
                </aside>
                <section className="col-sm-12 col-md-8 bg-light px-5" id="board">
                    <h3 className="font-weight-bold text-center secondFont mt-2">Contenu</h3><span className="glyphicon glyphicon-user" />
                        <div className="d-flex" align="right">
                            <aside id="warriorSide" className="w-50 d-flex flex-column justify-content-start align-items-start">
                              <div className="table-wrapper">
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>Pseudo</th>
                                      <th>Email</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {this.DataTable()}
                                  </tbody>
                                </Table>
                              </div>
                            </aside>
                    </div>
                </section>
            </div>
        </main>

    </div>

  </>);
  }
}