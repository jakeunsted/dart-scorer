const express = require('express')
const GamesRouter = express.Router()
const scoreAverage = require('../../games/scoreAverage')

GamesRouter.route('/game')
/**
   * @method POST
   * @description Handles the request to start a new game.
   * @param {string} gameName - The name of the game to be started.
   * @param {Object} gameSettings - The settings for the game to be started.
   */
	.post((req, res) => {
		let game
		const { gameName, gameSettings } = req.body
    
		if (gameName === 'scoreAverage') {
			game = new scoreAverage(gameSettings.maxThrows)
		}
  
		if (game) {
			req.session.games = req.session.games || []
			req.session.games.push(game)
  
			res.send('New Game Starting')
		} else {
			res.status(400).send('Game not found')
		}
	})

module.exports = GamesRouter