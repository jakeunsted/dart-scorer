const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

class Games extends Model {}

Games.init({
	id: {
		type: DataTypes.UUID,
		autoIncrement: true,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false
	},
	timesPlayed: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
})