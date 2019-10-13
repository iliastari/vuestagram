module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
        user_id: {
            type: DataTypes.STRING
        },
        img_url: {
            type: DataTypes.STRING,
            unique: true
        },  
        post_desc: {
            type: DataTypes.STRING
        }
    })

  

    return Posts
}
