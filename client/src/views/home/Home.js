import React, { Component } from 'react'
import { connect } from 'react-redux'


class HomePage extends Component {

    render() {
        const { user } = this.props.auth.user;
        return (
            <div>
                Welcome, {user.name}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }

  const Home = connect(mapStateToProps)(HomePage)

  export { Home }