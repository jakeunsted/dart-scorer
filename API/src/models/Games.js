const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db/psql')

class Games extends Model {}

Games.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		autoIncrement: true,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false
	},
	timesPlayed: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	sequelize,
	modelName: 'Games',
	timestamps: false
})

module.exports = Games