const mongoose = require('mongoose')

const completeGameSchema = new mongoose.Schema({
    createdOn: {
      type: Date,
      required: true
    },
    gameName: {
      type: String,
      required: true
    },
    threeDartAverage: {
      type: Number,
      required: true
    }
});

const CompletedGame = mongoose.model('CompletedGame', completeGameSchema)

module.exports = CompletedGame