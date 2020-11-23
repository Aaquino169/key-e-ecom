const express = require('express')  
const bcrypt = require('bcrypt')
const users = express.Router()
const Users = require('../models/users')
const Merch = require('../models/merch')

const isAuthenticated = (req, res, next) =>  {
	if (req.session.currentUser) {
		return next()
	}else{
        res.status(400).json(() => {console.log('users not logged in')})
    }
}

//create route
users.post('/new', async (req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    Users.create( req.body, (err, createdUser) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('User Created:', createdUser )
        res.status(200).send(createdUser)
    })
})

//add to cart
users.put('/addToCart/:merchId', isAuthenticated, async (req,res) => {
    try {
        
        const targetMerch = await Merch.findById(req.params.merchId)

        let currentUser = req.session.currentUser

        let userData = await Users.findById(currentUser._id)

        userData["cart"].push(targetMerch)

        console.log(userData)

        userData.save()

        res.status(200).send(userData)

    } catch (err) {

        res.status(400).json({ err: err.message})
    }
})

//remove from cart 
users.put('/removeFromCart/:merchId', isAuthenticated, async (req,res) => {
    try {
        let currentUser = req.session.currentUser

        let userData = await Users.findById(currentUser._id)

        let cart = userData["cart"]

        for(i in cart) {
            if(cart[i]._id == req.params.merchId) {
                cart.splice(i,1)
            }
        }

        userData.save()

        res.status(200).send(userData)

    } catch (err) {
        res.status(400).json({ err: err.message})
    }
})



module.exports = users
