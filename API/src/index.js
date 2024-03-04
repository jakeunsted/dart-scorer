require('dotenv').config()
const express = require('express')
const session = require('express-session')
const { sequelize } = require('./db/psql') // Import the Sequelize instance

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
const UserStatisticsRouter = require('./routes/user_statistics/index')
app.use(UserStatisticsRouter)

/**
 * @method GET
 * @description Test endpoint to check if the API is running.
 */
app.get('/test', (req, res) => {
	res.send('Hello World')
})

sequelize.authenticate()
	.then(() => {
		console.log('DB connected successfully.')
		app.listen(process.env.PORT, () => {
			console.log(`Server is running on port ${process.env.PORT}`)
		})
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err)
	})
