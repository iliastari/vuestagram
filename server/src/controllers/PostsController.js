const {Posts} = require('../models')

module.exports = {
        /* upload a post*/
       async postImg (req, res) {
           try {
            const post = await Posts.create(req.body)
            const postJson = Posts.toJSON()

            res.send({
                post: postJson,
            })
            
            res.send(post.toJSON())
    
            } catch (err) {
                res.status(400).send({
                    error: 'error'
                })
            }
        } , 

        getPost (req, res) {
            const {id} = req.params
            Posts.findOne({ where: { id: id} }).then(post => res.json(post))

        },
        
        getAllPosts (req, res) {
            Posts.findAll().then(post => res.json(post))
        } 
      
}