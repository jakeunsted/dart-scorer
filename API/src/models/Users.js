const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    autoIncrement: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
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

