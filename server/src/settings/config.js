module.exports = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'mysql',

        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'test123',
        database: process.env.DB_NAME || 'devdb'
    }
}