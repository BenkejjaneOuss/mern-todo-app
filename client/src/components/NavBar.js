import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logoutUser } from "../actions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';


class NavBarComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  _isLoginOrLogout() {
    if(this.props.isAuth) {
      return ( 
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="" onClick={this.onLogoutClick}>Logout</NavLink>
          </NavItem>
        </Nav>
      )
    }

    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/register">Register</NavLink>
        </NavItem>
      </Nav>
    )
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" dark expand="md">
          <Container>

          <NavbarBrand href="/">MERN Todo App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            
            {this._isLoginOrLogout()}
            
          </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    profile: state.auth.profile
  }
}
const NavBar = connect(mapStateToProps, { logoutUser })(NavBarComponent)

export { NavBar }