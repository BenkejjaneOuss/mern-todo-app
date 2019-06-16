import React, { Component } from 'react'
import { Button, FormGroup, Input, FormFeedback, Alert, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom'
import './login.css'
import logo from '../logo.png';
import { Formik } from 'formik'
import * as Yup from 'yup';
import { connect } from 'react-redux'
import { signUpAction } from '../../actions'
class RegisterPage extends Component {

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.isAuth) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if(this.props.isRegister){
      this.props.history.push("/login");
    }
  }

  _handleFormSubmit(values) {
    this.props.signUpAction(values)
  }

  _renderButton() {
    if(this.props.loading){
      return (<Spinner size="sm" color="light" />)
    }

    return("Register")
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
            initialValues = {{ name: '', email: '', password: '', passwordConfirmation: ''}}
            onSubmit = { this._handleFormSubmit.bind(this)}
            validationSchema = {
              Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().required().email(),
                password: Yup.string().required().min(6),
                passwordConfirmation: Yup.string().test('passwords-match', 'Passwords must match ya fool', function(value) {
                  return this.parent.password === value;
                }),
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
                    <Input invalid={errors.name && touched.name} type="text" name="name" placeholder="Full Name" onChange={handleChange} onBlur={handleBlur} />
                    {errors.name && touched.name ? <FormFeedback>{errors.name}</FormFeedback>: null}
                </FormGroup>
                <FormGroup className="m-3">
                    <Input invalid={errors.email && touched.email} type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && touched.email ? <FormFeedback>{errors.email}</FormFeedback>: null}
                </FormGroup>
                <FormGroup className="m-3">
                    <Input invalid={errors.password && touched.password} type="password" name="password" ref="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.password && touched.password ? <FormFeedback>{errors.password}</FormFeedback>: null}
                </FormGroup>
                <FormGroup className="m-3">
                    <Input invalid={errors.passwordConfirmation && touched.passwordConfirmation} type="password" name="passwordConfirmation" placeholder="Password Confirmation" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.passwordConfirmation && touched.passwordConfirmation ? <FormFeedback>{errors.passwordConfirmation}</FormFeedback>: null}
                </FormGroup>

                <FormGroup  className="text-right mr-3">
                  <Link to="/Login">Already have an account?</Link>
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
    loading : state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.isAuth,
    isRegister: state.auth.isRegister
  }
}
const Register = connect(mapStateToProps, { signUpAction })(RegisterPage)
export { Register }