module.exports = (sequelize, DataTypes) => {
    const Post_comments = sequelize.define('Post_comments', {
        post_id: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.STRING
        }
    })
    return Post_comments
}
