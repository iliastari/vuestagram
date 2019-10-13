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
        
        getUser (req, res) {
            const {id} = req.params
            User.findOne({attributes: {exclude: ['password']}},
            { 
                where: { id: id } 
            }
            ).then(user => res.json(user))

        },
        
        getAllUsers (req, res) {
            User.findAll({attributes: {exclude: ['password']}}).then(user => res.json(user))
        },
}