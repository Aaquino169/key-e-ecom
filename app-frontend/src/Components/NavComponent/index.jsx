import React from 'react'
import UserLogin from '../UserLogin'
import HomeComponent from '../HomeComponent'
import MerchContainer from '../MerchContainer'
import Merch from '../Merch'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
export default function NavBar(props){



    return(
        <div class='header-container'>
            <div class ='logo'>
                <h1>
                    logo
                </h1>
            </div>
            <div class ='search-bar'>
                <input type='text' id='searchbar' name='searchbar' placeholder='Search...' />
                <button type='submit' id='search-btn'> Search</button>
            </div>

                <div class='nav-container'>
                    <nav>
                        <ul class='nav'>
                                <td>
                                    Welcome, {props.username}
                                </td>
                            <td>
                                Orders
                            </td>
                            <td>
                                Cart
                            </td>
                        </ul>

                    </nav>
                </div>
                
        </div>
    )
}
