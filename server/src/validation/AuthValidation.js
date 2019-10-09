const Joi = require('joi')

module.exports = {
    register (req, res, next) {

        const schema = {
            email: Joi.string()
                    .email()
                    .required(),

            fullname: Joi.string()
                    .min(3)
                    .max(70)
                    .required(),

            username: Joi.string()
                    .alphanum()
                    .min(3)
                    .max(32)
                    .required(),

            password: Joi.string()
                    .min(6)
                    .max(32)
                    .required()
        }

        const {error, value} = Joi.validate(req.body, schema)

        if(error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: "An valid email is required"
                    })
                    break
                case 'fullname':
                    res.status(400).send({
                        error: "An valid full name is required"
                    })
                    break
                case 'username':
                    res.status(400).send({
                        error: "An valid username is required"
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: "Password must be min 6 and max 32 characters long."
                    })
                    break

                default:
                    res.status(400).send({
                        error: "Invalid credentials"
                    })
            }
        } else {
        next()
        }
    }
}