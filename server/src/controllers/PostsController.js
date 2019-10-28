const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {Posts} = require('../models')
const {Post_comments} = require('../models')
const {Post_likes} = require('../models')
const {User} = require('../models')
const {relationships} = require('../models')

module.exports = {
    
        /* Like Post */
        async likePost(req, res) {
            try {

                const like = await Post_likes.create(req.body)
                res.send(like.toJSON())

            } catch(err) {
                res.status(400).send({
                    error: 'error'
                })
            }
        },      
        async unlikePost(req, res) {
            try {

                await Post_likes.destroy({
                    where: {
                        post_id: req.body.post_id,
                        user_id: req.body.user_id
                    }
                })
                res.send("unliked post succesfully")

            } catch(err) {
                res.status(400).send({
                    error: 'error'
                })
            }
        },

        /* upload a post*/
        async postComment (req, res) {
            try {

            const comment = await Post_comments.create(req.body)
            res.send(comment.toJSON())
    
            } catch (err) {
                res.status(400).send({
                    error: 'error'
                })
            }
        }, 

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
            //const {id} = req.params
            //Post.findOne({ where: { id: id} }).then(post => res.json(post))

        },  
        
        
        getComments (req, res) {
            //const {id} = req.params
            //Post_comments.findAll().then(comment => res.json(comment))
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
                
            /*const getComments = await Post_comments.findAll({ 
                where: { 
                    [Op.or]: [{user_id: user_id}, {user_id: relationships_id }]
                }})*/

            const post_user_id = getPosts.map(post => (post.user_id))
            const post_id = getPosts.map(post => (post.id))

            const getComments = await Post_comments.findAll({ 
                where: { 
                    [Op.or]: [{post_id: post_id}]
                }
            })

            let postLikes = await Post_likes.findAll({ 
                where: {  post_id: post_id}
            })

            const allPosts = getPosts

            const user = await User.findAll({ where: { [Op.or]: [{id: post_user_id}]}, attributes: ['id', 'username','profile_picture'] })
            const likeByUser = await Post_likes.findAll({ where: {user_id: post_user_id}})
            

            res.send({
                posts: allPosts,
                users: user,
                comments: getComments,
                postLikes,
                likeByUser
            })


        } catch(err) {
            res.status(500).send({
                error: 'error bruv'
            })
        }
        },  

        async getProfilePosts (req, res) {
            try {
            
            const {nameorid} = req.params
            
            const userinfo = await User.findAll( { limit:1, where: { [Op.or]: [{username: nameorid},{id: nameorid}]}, attributes: ['id', 'username','fullname','profile_picture','description','profile_private'] })

            // get user_id from userinfo
            const user_id = userinfo.map(user => (user.id))

            // Count how many people user id is following
            let following = await relationships.findAndCountAll({ where: { user_one_id: user_id}})

            // Count how many people followers user id has
            let followers = await relationships.findAndCountAll({ where: { user_two_id: user_id}})


            const getPosts = await Posts.findAndCountAll({ 
                where: {user_id: user_id}
            })      

            res.send({
                posts: getPosts,
                userinfo: userinfo,
                following: following.count,
                followers: followers.count
                
            })


        } catch(err) {
            res.status(500).send({
                error: 'error bruv'
            })
        } 

        },   
        async getPostLikes (req, res) {
            try {

            // post id
            const {post_id} = req.params
            
            // Count how many people followers user id has
            let postLikes = await Post_likes.findAndCountAll({ where: {  post_id: post_id}})
            res.send({postLikes})
            
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