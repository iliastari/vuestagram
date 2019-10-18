const {User} = require('../models')

module.exports = {

        async getUser (req, res) {
            try {

            const {username} = req.params
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