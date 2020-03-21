export default {
    jwtSecret: process.env.JWT_SECRET || 'JWTSecret',
    DB: {
        URI: process.env.MONGO_URI || 'mongodb://localhost/apitypescript',
        USER: process.env.MONGO_USER,
        PASSWORD: process.env.MONGO_PASS
    }
}