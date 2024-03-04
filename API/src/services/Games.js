const Games = require('../models/Games')

const createGame = async (newGame) => {
	try {
		const game = await Games.create({
			name: newGame.name,
			timesPlayed: 0,
		})
		console.log('Game created:', game.toJSON())
		return game.toJSON()
	} catch (error) {
		console.error('Error creating new game:', error.errors)
		return null
	}
}

module.exports = {
	createGame
}