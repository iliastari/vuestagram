const AuthController = require('./controllers/AuthController')
const PostsController = require('./controllers/PostsController')
const AuthValidation = require('./validation/AuthValidation')

module.exports = (app) => {
    app.post('/register', AuthValidation.register, AuthController.register)

    app.post('/posts',  PostsController.postImg)
    app.get('/posts/:id', PostsController.getPost)
    app.get('/posts',  PostsController.getAllPosts)

    app.post('/login',  AuthController.login)
}
