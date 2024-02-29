const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'User'
})

module.exports = User

