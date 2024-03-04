const express = require('express')
const UserRouter = express.Router()
const UserService = require('../../services/Users')

UserRouter.route('/user')
/**
   * Handles POST request for user.
   * @name POST/user
   * @method POST
   * @memberof module:routes/users
   */
	.post(async (req, res) => {
		console.log('/user POST req.body:', req.body)
		if (!req.body.username || !req.body.password) {
			res.status(400).send(
				'User POST Failure: Missing username or password'
			)
			return
		}
		const newUser = {
			username: req.body.username,
			password: req.body.password
		}
		try {
			const createdUser = await UserService.createUser(newUser)
			res.send('User POST Success: ' + createdUser)
		} catch (error) {
			console.log('Error creating user:', error)
			res.status(500).send('User POST Failure')
		}
	})

/**
   * Handles GET request for user.
   * @name GET/user
   * @method GET
   * @memberof module:routes/users
 */
	.get((req, res) => {
		console.log('/user GET')
		res.send('User GET Success')
	})

UserRouter.route('/user/isAdmin/:id')
/**
 * Handles GET request for the user admin check with ID
 * @method GET
 * @name /user/isAdmin/:id
 * @memberof module:routes/users
 */
	.get(async (req, res) => {
		console.log('/user/isAdmin/:id GET req.params:', req.params)
		try {
			const isAdmin = await UserService.isIdAdmin(
				req.params.id
			)
			res.send('User isAdmin GET Success: ' + isAdmin)
		} catch (error) {
			console.log('Error checking if user ID is admin:', error)
			res.status(500).send('User isAdmin GET Failure')
		}
	})

module.exports = UserRouter