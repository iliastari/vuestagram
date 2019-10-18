module.exports = (sequelize, DataTypes) => {
    const Post_likes = sequelize.define('Post_likes', {
        post_id: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.STRING
        }
    })

  

    return Post_likes
}
