const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {User} = require('../models')
const {relationships} = require('../models')

module.exports = {
    
        /* Follow a user */
        async followUser (req, res) {
            try {
             await relationships.create(req.body)
             res.send("Followed successfully")
     
             } catch (err) {
                 res.status(400).send({
                     error: err
                 })
             }
         } , 

        /* Unfollow a user */
        async unfollowUser (req, res) {
            try {
            await relationships.destroy({
                where: {
                    user_one_id: req.body.user_one_id,
                    user_two_id: req.body.user_two_id
                }
            })
            res.send("Unfollowed succesfully")
    
            } catch (err) {
                res.status(400).send({
                    error: err
                })
            }
        } , 

        /* Check relation between users */
        async relationshipData (req, res) {
            try {
                const {user_one_id, user_two_id} = req.body

                let relation = await relationships.findAndCountAll({ 
                    where: { [Op.or]: [{user_one_id: user_one_id, user_two_id:user_two_id }]},
                })

                let following = false
                
                if(relation.count) {
                    following = true
                } else {
                    following = false
                }
                

                res.json({following})

            } catch(err) {
                res.status(400).send({
                    error: err
                })
            }
            
         } , 

     
        getAllPosts (req, res) {
            Posts.findAll().then(post => res.json(post))
        } 
      
}