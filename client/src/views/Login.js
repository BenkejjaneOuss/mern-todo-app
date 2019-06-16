import React, { Component } from 'react'
import { Button, FormGroup, Input, FormFeedback, Spinner, Alert } from 'reactstrap';
import './login.css'
import logo from './logo.png';
import { Formik } from 'formik'
import * as yup from 'yup';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { signInAction } from "../actions";

class LoginPage extends Component {
  
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.isAuth) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if(this.props.isAuth){
      this.props.history.push('/')
    }
  }

  _handleFormSubmit(values) {
    this.props.signInAction(values)
  }

  _renderButton() {
    if(this.props.attempting){
      return (<Spinner size="sm" color="light" />)
    }

    return("Log In")
  }

  _errorMsg() {
    if(this.props.error){
      return (<Alert color="danger">{this.props.error}</Alert>)
    }
  }

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">

          <div className="fadeIn first">
            <img src={logo} id="icon" alt="User Icon" />
            <h1>Todo App</h1>
          </div>
          { this._errorMsg() }
          <Formik 
            initialValues = {{ email: '', password: ''}}
            onSubmit = { this._handleFormSubmit.bind(this)}
            validationSchema = {
              yup.object().shape({
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
                      <Input invalid={errors.email && touched.email} type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} />
                      {errors.email && touched.email ? <FormFeedback>{errors.email}</FormFeedback>: null}
                    </FormGroup>
                <FormGroup className="m-3">
                      <Input invalid={errors.password && touched.password} type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur}/>
                      {errors.password && touched.password ? <FormFeedback>{errors.password}</FormFeedback>: null}
                    </FormGroup>

                <FormGroup  className="text-right mr-3">
                  <Link to="/register">Don't have an account?</Link>
                </FormGroup>
                <FormGroup>
                    
                <Button color="primary" className="fadeIn fourth" onClick={handleSubmit} >{this._renderButton()}</Button>

                </FormGroup>
              </div>
            )}
          />

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    attempting : state.auth.attempting,
    error: state.auth.error,
    isAuth: state.auth.isAuth
  }
}

const Login = connect(mapStateToProps, { signInAction })(LoginPage)
export { Login }