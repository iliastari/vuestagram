const AuthController = require('./controllers/AuthController')
const PostsController = require('./controllers/PostsController')
const UsersController = require('./controllers/UsersController')
const RelationshipController = require('./controllers/RelationshipController')
const AuthValidation = require('./validation/AuthValidation')

module.exports = (app) => {
    app.post('/register', AuthValidation.register, AuthController.register)
    app.post('/login',  AuthController.login)

    app.post('/posts', PostsController.postImg) // post a post

    app.post('/posts/comment/', PostsController.postComment) // post a comment
    app.get('/posts/comment/', PostsController.getComments) // get post comments   
    
    app.post('/posts/like/', PostsController.likePost) // like a post
    app.post('/posts/unlike/', PostsController.unlikePost) // unlike a post

    app.get('/posts/:id', PostsController.getPost) // get post based on ID
    app.get('/posts/likes/:post_id', PostsController.getPostLikes) // get post based on ID

    app.get('/posts/feed/:user_id', PostsController.getFeedPosts) // get all posts of the people the user is following

    app.get('/posts/profile/:nameorid', PostsController.getProfilePosts) // get all posts of certain user

    app.get('/posts', PostsController.getAllPosts) // get all posts

    app.get('/users/:username', UsersController.getUser) // get user based on username
    app.get('/users', UsersController.getAllUsers) // get all users in db lmao

    app.post('/followuser', RelationshipController.followUser) // follow a user
    app.post('/unfollowuser', RelationshipController.unfollowUser) // follow a user
    app.post('/relationshipdata', RelationshipController.relationshipData) // relationship data 

    app.get("*", function(req, res) {
        res.status(404).send("Error 404");
    })

}
