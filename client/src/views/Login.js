import React, { Component } from 'react'
import { Button,Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import './login.css'
import logo from './logo.png';
class Login extends Component {
    render() {
        return (
            <div className="wrapper fadeInDown">
  <div id="formContent">

    <div className="fadeIn first">
      <img src={logo} id="icon" alt="User Icon" />
      <h1>Todo App</h1>
    </div>

    <Form >
    <FormGroup className="m-3">
          <Input invalid type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
          <FormFeedback>Error! Email Invalid</FormFeedback>
        </FormGroup>
    <FormGroup className="m-3">
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>

    <FormGroup>
         
    <Button color="primary" className="fadeIn fourth" >Log In</Button>

    </FormGroup>
</Form>
  </div>
</div>
        )
    }
}

export { Login}