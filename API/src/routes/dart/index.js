const express = require('express')
const DartRouter = express.Router()

DartRouter.route('/dart/score')
/**
   * @method POST
   * @description Handles the request to add a score to the game.
   * @memberof module:routes/dart
   */
	.post((req, res) => {
		try {
			const { score } = req.body
			console.log('score received: ', score)
			res.status(200).send('Success')
		} catch (err) {
			console.log('Error: ', err)
			res.status(500).send('Internal Server Error')
		}
	})

module.exports = DartRouter