const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

class CompletedGames extends Model {}

CompletedGames.init({
  createdOn: {
    type: DataTypes.DATE,
    allowNull: false
  },
  gameName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  threeDartAverage: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
}, {
    sequelize,
    modelName: 'CompletedGame'
})

module.exports = CompletedGame
