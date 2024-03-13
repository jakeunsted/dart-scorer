require('dotenv').config()
const express = require('express')
const session = require('express-session')
const { auth } = require('express-openid-connect')
const { 
	sequelize,
	checkAdminUser 
} = require('./db/psql') // Import the Sequelize instance

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
 * Auth0 configuration
 */
const config = {
	authRequired: false,
	auth0Logout: true,
	secret: process.env.AUTH0_SECRET,
	baseURL: process.env.AUTH0_BASE_URL,
	clientID: process.env.AUTH0_CLIENT_ID,
	issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
}
if (process.env.LOCAL !== 'true') {
	console.log('setting auth0')
	app.use(auth(config))

	app.get('/', (req, res) => {
		res.send(req.oidc.isAuthenticated() 
			? `Logged in \n ${JSON.stringify(req.oidc.user)}`
			: 'Logged out'
		)
	})
}

/**
 * @method GET
 * @description Test endpoint to check if the API is running.
 */
app.get('/test', (req, res) => {
	res.send('Hello World')
})

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
const AuthRouter = require('./routes/auth/index')
app.use(AuthRouter)

sequelize.authenticate()
	.then(() => {
		checkAdminUser()
			.then(() => {
				console.log('DB connected successfully.')
				app.listen(process.env.PORT, () => {
					console.log(`Server is running on port ${process.env.PORT}`)
				})
			})
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err)
	})
