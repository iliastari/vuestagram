const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./settings/config')

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

require('./router')(app)

sequelize.sync().then(function(){
    app.listen(config.port)
    console.log(`Server is connected to the [${config.db.dialect}] database and started on port ${config.port}`)
  
    }, function(err){
        // catching error
        console.log(err);
    });

