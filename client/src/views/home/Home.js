import React, { Component } from 'react'
import { Table, Container, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTasks } from '../../actions'

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchTasks()
    }
    render() {

        const {  tasks } = this.props;

        return (

            <div className="align-middle">
                <Container className="mt-4">
                    <div style={{ margin : '4rem 0' }}>
                        <h1 className="fadeIn first">My Task List </h1>
                        <div>
                            <Link to="/add-task" className="fadeIn second float-right"><Button type="button" color="primary"  >Add Task</Button></Link>
                            
                        </div>
                    </div>
                    <Table hover borderless striped className="fadeIn third">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Task Name</th>
                            <th>Completed</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tasks.map((item, index) =>                 
                            <tr className={item.done ? 'taskCompleted' : null} key={item._id} > 
                                <th scope="row" >{index+1}</th>
                                <td >{item.name}</td>
                                <td >{item.done ? 'Yes' : 'No'}</td>
                                <td><Button color="primary" outline size="sm" className="mr-2" >Edit</Button><Button outline color="danger" size="sm" >Delete</Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        tasks : state.task.tasks
    }
}

const Home = connect(mapStateToProps, { fetchTasks })(HomePage)

export { Home }