module.exports = (app) => {
    app.post('/register', (req, res) => {
        res.send({
            message: `${req.body.email}, ${req.body.password}  is registered!`,

        })
    })
}
