// A mongoDB model for a user.
const mongoose = require('mongoose')
const { CompletedGame } = require('./CompletedGames')

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedOn: {
      type: Date,
      default: null
    },
    games: [CompletedGame]
})

const User = mongoose.model('User', userSchema)

module.exports = User