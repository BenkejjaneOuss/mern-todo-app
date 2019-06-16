import React, { Component } from 'react'
import { Button, FormGroup, Input, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom'
import './login.css'
import logo from './logo.png';
import { Formik } from 'formik'
import * as yup from 'yup';

class Register extends Component {
  _handleFormSubmit(values) {
    console.log(values)
  }
  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">

          <div className="fadeIn first">
            <img src={logo} id="icon" alt="User Icon" />
            <h1>Todo App</h1>
          </div>
          
          <Formik 
            initialValues = {{ username: '', email: '', password: ''}}
            onSubmit = { this._handleFormSubmit.bind(this)}
            validationSchema = {
              yup.object().shape({
                username: yup.string().required(),
                email: yup.string().required().email(),
                password: yup.string().required().min(6)
              })
            }
            render = {({
              handleChange,
              handleSubmit,
              handleBlur,
              isValid,
              isSubmitting,
              errors,
              touched,
            }) => (
              <div>
                <FormGroup className="m-3">
                    <Input invalid={errors.username && touched.username} type="text" name="username" placeholder="Username" onChange={handleChange} onBlur={handleBlur} />
                    {errors.username && touched.username ? <FormFeedback>{errors.username}</FormFeedback>: null}
                </FormGroup>
                <FormGroup className="m-3">
                    <Input invalid={errors.email && touched.email} type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && touched.email ? <FormFeedback>{errors.email}</FormFeedback>: null}
                </FormGroup>
                <FormGroup className="m-3">
                    <Input invalid={errors.password && touched.password} type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.password && touched.password ? <FormFeedback>{errors.password}</FormFeedback>: null}
                </FormGroup>

                <FormGroup  className="text-right mr-3">
                  <Link to="/Login">Already have an account?</Link>
                </FormGroup>

                <FormGroup>
                    <Button color="primary" className="fadeIn fourth" onClick={handleSubmit} >Register</Button>
                </FormGroup>
              </div>
            )}
          />

          
        </div>
      </div>
    )
  }
}

export { Register }