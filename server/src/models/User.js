module.exports = (sequilize, DataTypes) => 
    sequilize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        fullname: {
            type: DataTypes.STRING
        }, 
        username: {
            type: DataTypes.STRING,
            unique: true
        }, 
        password: {
            type: DataTypes.STRING,
        }
    })
