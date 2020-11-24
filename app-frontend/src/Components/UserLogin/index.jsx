import React, { Component } from 'react'



export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      action: 'Login'
    }
  }

switchForm = () => {
  if(this.state.action === "Login") {
    this.setState({ action: "Register" })
  } else {
    this.setState({ action: "Login" })
  }
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = (event) => {
   event.preventDefault()
   console.log()
   console.log(`You are trying to ${this.state.action.toLowerCase()} with the following credentials`)
   console.log(this.state);
   if(this.state.action === "Register") {
      this.props.register(this.state)
    } else {
      this.props.login(this.state)
    }
 }




render() {
    return (
      <div class='login-form'>
        <h2>{this.state.action} here</h2>
        <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username:</label>
              <input
                type="username"
                name="username"
                placeholder="Enter a Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
          </div>
          <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter a password"
                value={this.state.password}
                onChange={this.handleChange}
              />
          </div>
          <button type="Submit" class='log-in'>
            { this.state.action === "Login" ? "Log in" : "Sign up"}
          </button>
        </form>
        {
          this.state.action === "Login"
          ?
          <p>
            Need an account? Sign up <button class="sign-up" onClick={this.switchForm}>here</button>
          </p>
          :
          <p>
            Already have an account? Log in <button class="sign-up" onClick={this.switchForm}>here</button>
          </p>

        }
      </div>
    )
  }
}
