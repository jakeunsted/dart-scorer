require('dotenv').config()
const express = require('express')
const session = require('express-session')

const app = express()

app.use(express.json())

/**
 * Middleware to handle the session for the API.
 */
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}))

/**
 * ROUTES Imports
 */
const UserRouter = require('./routes/users/index')
app.use(UserRouter)
const DartRouter = require('./routes/dart/index')
app.use(DartRouter)
const GamesRouter = require('./routes/games/index')
app.use(GamesRouter)

/**
 * @method GET
 * @description Test endpoint to check if the API is running.
 */
app.get('/test', (req, res) => {
	res.send('Hello World')
})

app.listen(process.env.PORT, () => {
	console.log(`API listening on port ${process.env.PORT}`)
})
