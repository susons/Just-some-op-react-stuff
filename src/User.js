import React, { Component } from 'react'
import { UserContext } from './UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer >
      {(context) => (
        <div>
          <h1>User info</h1>
          <h3>{context.user.name}</h3>
          <h3>{context.user.email}</h3>
          <button onClick={context.logout}>Logout</button>
        </div>
      )}
      </UserContext.Consumer>

    )
  }
}
