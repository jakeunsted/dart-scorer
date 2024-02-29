require('dotenv').config()
const express = require('express')
const session = require('express-session')

const scoreAverage = require('./games/scoreAverage')

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
 * @method GET
 * @description Test endpoint to check if the API is running.
 */
app.get('/test', (req, res) => {
  res.send('Hello World')
});

/**
 * @method POST
 * @description Handles the request to add a score to the game.
 * @param {number} score - The score to be added to the game.
 */
app.post('/dart/score', (req, res) => {
  try {
    const { score } = req.body
    console.log('score received: ', score)
    res.status(200).send('Success')
  } catch (err) {
    console.log('Error: ', err)
    res.status(500).send('Internal Server Error')
  }
});

/**
 * @method POST
 * @description Handles the request to start a new game.
 * @param {string} gameName - The name of the game to be started.
 * @param {Object} gameSettings - The settings for the game to be started.
 */
app.post('/game', (req, res) => {
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

app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`)
})
