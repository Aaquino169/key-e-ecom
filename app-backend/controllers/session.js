const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users')

//login to seessions
sessions.post('/', (req,res) => {

    User.findOne({ username: req.body.username }, (err, foundUser) => {

        if (err) {
            console.log('problem with the db:', err)
        }else if (!foundUser) {
            console.log('no user with that username')
        }else{
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser
                res.status(200).send(req.session.currentUser)
                //can redirect to home page while staying logged in?
            } else if(err) {
                res.status(400).json({ err: err.message})
            }
        }
    })
})


//logout of sessions

sessions.delete('/logout', (req, res) => {
    req.session.destroy(() => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        res.status(200).send(req.session.currentUser)
    })
    
  })

module.exports = sessions
