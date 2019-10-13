const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options) {
    const SALT_FACTOR = 8

    if(!user.changed('password')) {
        return
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        fullname: {
            type: DataTypes.STRING
        },  
        description: {
            type: DataTypes.STRING
        }, 
        username: {
            type: DataTypes.STRING,
            unique: true
        }, 
        password: {
            type: DataTypes.STRING,
        },
        profile_picture: {
            type: DataTypes.STRING,
            defaultValue: "default.jpg"
        },
        profile_private: {
            type: DataTypes.ENUM('false','true'),
            defaultValue: 'false'
        },
        }, 
        
        {
            hooks: {
                beforeCreate: hashPassword
            },
   

        }
        
        )

    User.prototype.comparePassword = function (password)  {
        return bcrypt.compareAsync(password, this.password)
    }

    return User
}
