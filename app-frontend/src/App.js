import React, { Component } from 'react';
import './App.css';
import MerchContainer from './Components/MerchContainer'
import NavBar from './Components/NavComponent'
import UserLogin from './Components/UserLogin'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Merch from './Components/Merch'


export default class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
      loggedInUsername: '',
      id:'',
      cart:[]

    }
  }

register = async (registerInfo) => {

  const url = 'http://localhost:8000/' + 'user/new'

  try {
      const registerResponse = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(registerInfo),
          headers: {
            'Content-Type': 'application/json'
          }
    })
    console.log("registerResponse", registerResponse);
    const registerJson = await registerResponse.json()
    console.log("registerJson", registerJson);

     if(registerResponse.status === 201) {
       this.setState({
         loggedIn: true,
         loggedInUsername: registerJson.data.username
       })
     }
  } catch(err) {
    console.error("Error trying to register with API")
    console.error(err)
  }
}

login = async (loginInfo) => {
  const url = 'http://localhost:8000/' + 'login/'

  try {
    const loginResponse = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(loginInfo),
      headers: {
        'Content-Type': 'application/json'
        },
      credentials: "include"
    })
    console.log("loginResponse", loginResponse);
    const loginJson = await loginResponse.json()
    console.log("loginJson", loginJson);
    console.log(loginJson.cart)

    if(loginResponse.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUsername: loginJson.username,
          id: loginJson._id,
          cart: loginJson.cart
      })
      }
  } catch(error) {
    console.error("Error trying to log in")
    console.error(error)
  }
}

    // update quantity U
    emptyCart = async () =>{
        const url = 'http://localhost:8000/' + 'user/buyCart'
        try{
            const emptyCartResponse = await fetch(url,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'

                },
                credentials: "include"
            })
            const emptyCartJson = await emptyCartResponse.json()
            console.log(emptyCartJson)

            this.setState({
                cart : []
            })
            }catch(err){
                console.log('Error with buy merch: ',err)
        }
    }

    addToCart = async (id) => {
        try{
            const url = 'http://localhost:8000/' + 'user/addToCart/' + id;
            const addToCartResponse = await fetch(url,{
                credentials: 'include',
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                }
            })

            console.log('addToCartResponse ', addToCartResponse)
            const addToCartJson = await addToCartResponse.json()
        } catch(err){
            console.log('Error adding Merch', err)
        }
    }


  render() {
    return (
      <div className="App">
            <div className="App">
                {
                  this.state.loggedIn
                  ?
                  <React.Fragment>

                    <NavBar username={this.state.loggedInUsername} logout={this.logout} id={this.state.id} />
                    <MerchContainer id={this.state.id} emptyCart={this.emptyCart} cart={this.state.cart} addToCart={this.addToCart}/>
                  </React.Fragment>
                  :
                  <UserLogin
                    login={this.login}
                    register={this.register}
                  />
                }
            </div>

      </div>
    );
  }
}
