const express = require('express')
const GamesRouter = express.Router()
const GamesService = require('../../services/Games')
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

GamesRouter.route('/game/new')
/**
   * @method POST
   * @description Creates a new game. 
   * @param {Object} newGame - The new game object.
   * @returns {Object} - The created game object.
   */
	.post((req, res) => {
		console.log(req.body.name)
		let newGame = {
			name: req.body.name,
		}
		try {

			const game = GamesService.createGame(newGame)
			res.send(game)
		} catch (error) {
			res.status(500).send('Error creating new game:', error.errors)
		}
	})

module.exports = GamesRouter