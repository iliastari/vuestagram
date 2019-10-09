const AuthController = require('./controllers/AuthController')
const AuthValidation = require('./validation/AuthValidation')

module.exports = (app) => {
    app.post('/register', AuthValidation.register, AuthController.register)

    app.post('/login', AuthController.login)
}
