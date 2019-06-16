import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { Table, Container, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class HomePage extends Component {

    render() {
        //const { user } = this.props.auth.user;
        return (
            <div className="align-middle">
                <Container className="mt-4">
                    <div style={{ margin : '4rem 0' }}>
                        <h1 className="fadeIn first">My Task List </h1>
                        <div>
                            <Link to="/add-task" className="fadeIn second float-right"><Button type="button" color="primary"  >dzd</Button></Link>
                            
                        </div>
                    </div>
                    <Table hover borderless striped className="fadeIn third">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Completed</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td><Button color="primary" outline size="sm" className="mr-2" >Edit</Button><Button outline color="danger" size="sm" >Delete</Button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}

  const Home = HomePage

  export { Home }