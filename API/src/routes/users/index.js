const express = require('express')
const UserRouter = express.Router()
// const UserMethods = require('../../services/Users')

UserRouter.route('/user')
/**
   * Handles POST request for user.
   * @name POST/user
   * @method POST
   * @memberof module:routes/users
   */
	.post((req, res) => {
		console.log('/user POST req.body:', req.body)
		res.end()
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

module.exports = UserRouter