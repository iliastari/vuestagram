const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {Posts} = require('../models')
const {User} = require('../models')
const {relationships} = require('../models')

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


        
        async getFeedPosts (req, res) {
            try {
               /* 
                
                I want to check if they have a relationship 
                based on their relation i check the id that the user follows
                and find all posts with that id
                
                */
            
            const {user_id} = req.params
            let relationships_id = await relationships.findAll({ where: { user_one_id: user_id},attributes: ['user_two_id']}).map(u => u.get("user_two_id"))
            
            const getPosts = await Posts.findAll({ 
                where: { 
                    [Op.or]: [{user_id: user_id}, {user_id: relationships_id }]
                }})

            const post_id = getPosts.map(post => (post.user_id))
            const allPosts = getPosts

            const user = await User.findAll({ where: { [Op.or]: [{id: post_id}]}, attributes: ['id', 'username','profile_picture'] })
            

            res.send({
                posts: allPosts,
                users: user
            })


        } catch(err) {
            res.status(500).send({
                error: 'error bruv'
            })
        }
        },  

        async getProfilePosts (req, res) {

                    try {
                      /*
                        I want to check if they have a relationship 
                        based on their relation i check the id that the user follows
                        and find all posts with that id
                        
                    */
                    
                    const {nameorid} = req.params
                    
                  
                    const userinfo = await User.findAll( { limit:1, where: { [Op.or]: [{username: nameorid},{id: nameorid}]}, attributes: ['id', 'username','fullname','profile_picture','description','profile_private'] })

                    //await User.findOne({where: { username: username }, attributes: {exclude: ['password']}})
                    const user_id = userinfo.map(user => (user.id))

                    const getPosts = await Posts.findAll({ 
                        where: {user_id: user_id}
                    })

                    res.send({
                        posts: getPosts,
                        userinfo: userinfo
                      
                    })


                } catch(err) {
                    res.status(500).send({
                        error: 'error bruv'
                    })
                } 

                },  

        
        getAllPosts (req, res) {
            Posts.findAll().then(post => res.json(post))
        } 
      
}