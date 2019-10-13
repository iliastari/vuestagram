const AuthController = require('./controllers/AuthController')
const PostsController = require('./controllers/PostsController')
const UsersController = require('./controllers/UsersController')
const AuthValidation = require('./validation/AuthValidation')

module.exports = (app) => {
    app.post('/register', AuthValidation.register, AuthController.register)
    app.post('/login',  AuthController.login)


    app.post('/posts', PostsController.postImg) // post a post
    app.get('/posts/:id', PostsController.getPost) // get post based on ID

    app.get('/posts/feed/:user_id', PostsController.getFeedPosts) // get all posts of certain user

    app.get('/posts/profile/:nameorid', PostsController.getProfilePosts) // get all posts of certain user

    app.get('/posts', PostsController.getAllPosts) // get all posts

    app.get('/users/:username', UsersController.getUser) // get user based on username
    app.get('/users', UsersController.getAllUsers) // get all users in db lmao


    app.post('/followuser', UsersController.followUser) // follow a user

   

}
