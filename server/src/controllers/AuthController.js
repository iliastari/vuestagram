const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../settings/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.auth.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}
module.exports = {
    /* REGISTER A USER */
   async register (req, res) {
       try {
        const user = await User.create(req.body)
        res.send(user.toJSON())

        } catch (err) {
            res.status(400).send({
                error: 'An account with this email already exists'
            })
        }
    }, 

    /* LOGIN A USER */
    async login(req, res) {
       try {
        const {email, password} = req.body
        const user = await User.findOne({
            where: {
                email: email
            }
        })

        if(!user) {
            res.status(403).send({
                error: "Login information was incorrect"
            })
        }

        const isPassValid = password === user.password

        if(!isPassValid) {
            res.status(403).send({
                error: "Login information was incorrect"
            })
        }

        res.send({
            user: user.toJSON(),
            token: 
        })

        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to login'
            })
        }
    },
}