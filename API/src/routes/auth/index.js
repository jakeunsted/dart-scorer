const express = require('express')
const AuthRouter = express.Router()

const ProfileRouter = require('./profile')
AuthRouter.use(ProfileRouter)

module.exports = AuthRouter