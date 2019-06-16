import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { Container, Button, FormGroup, Input, FormFeedback, Spinner,Label, Alert } from 'reactstrap'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup';

import { saveTaskAction } from "../../actions";

class AddTaskPage extends Component {
    componentDidMount() {

      }
    
      componentDidUpdate() {
        if(this.props.isSaved){
            //this.props.history.push('/')
          }
      }
    
      _handleFormSubmit(values) {
          this.props.saveTaskAction(values)
      }
    
      _renderButton() {
        if(this.props.loading){
          return (<Spinner size="sm" color="light" />)
        }
    
        return("Add Task")
      }
      _errorOrSuccessMsg() {
        if(this.props.error){
          return (<Alert color="danger">{this.props.error}</Alert>)
        }
        if(this.props.isSaved){
          return (<Alert color="success">User saved</Alert>)
        }
      }
    render() {
        //const { user } = this.props.auth.user;
        return (
            <div className="align-middle">
                <Container className="mt-4">
                    <div style={{ margin : '4rem 0' }}>
                        <h1 className="fadeIn first">New task </h1>
                    </div>
                    {this._errorOrSuccessMsg()}
                    <Formik 
            initialValues = {{ name: '', done: false}}
            onSubmit = { this._handleFormSubmit.bind(this)}
            validationSchema = {
              Yup.object().shape({
                name: Yup.string().required(),
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
              <div className="fadeIn third">
                <FormGroup className="mb-3">
                    <Input invalid={errors.name && touched.name} type="text" name="name" placeholder="Task Name" onChange={handleChange} onBlur={handleBlur} />
                    {errors.name && touched.name ? <FormFeedback>{errors.name}</FormFeedback>: null}
                </FormGroup>
                <FormGroup check className="mb-3">
          <Label check>
            <Input type="checkbox" name="done" onChange={handleChange}/>{' '}
            Completed
          </Label>
        </FormGroup>
                <FormGroup className="mb-3" >
                    
                <Button type="submit" color="primary" className="fadeIn fourth" onClick={handleSubmit} >{this._renderButton()}</Button>

                </FormGroup>
              </div>
            )}
          />
                    
                </Container>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading : state.task.loading,
        error: state.task.error,
        isSaved: state.task.isSaved
    }
}

const AddTask = connect(mapStateToProps, { saveTaskAction })(AddTaskPage)

export { AddTask }