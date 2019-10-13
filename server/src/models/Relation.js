module.exports = (sequelize, DataTypes) => {
    const relationships = sequelize.define('relationships', {
        user_one_id: {
            type: DataTypes.STRING
        },
        user_two_id: {
            type: DataTypes.STRING
        }
    })

  

    return relationships
}
