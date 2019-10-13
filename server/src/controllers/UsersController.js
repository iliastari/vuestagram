const {User} = require('../models')
const {relationships} = require('../models')

module.exports = {
         
        async followUser (req, res) {
            try {
             await relationships.create(req.body)
             res.send(relationships.toJSON())
     
             } catch (err) {
                 res.status(400).send({
                     error: err
                 })
             }
         } , 
        
        async getUser (req, res) {
            try {

            const {username, id} = req.params
            await User.findOne({where: { username: username }, attributes: {exclude: ['password']}}).then(user => res.json(user)) 

            } catch(err) {
                res.status(400).send({
                    error: err
                })
            }

        },
        
        getAllUsers (req, res) {
            User.findAll({attributes: {exclude: ['password']}}).then(user => res.json(user))
        },
}