const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../psql')
const { User } = './Users.js'

class CompletedGames extends Model {}

CompletedGames.init({
	id: {
		type: DataTypes.UUID,
		autoIncrement: true,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false
	},
	userId: {
		type: DataTypes.UUID,
		allowNull: false,
		references: { // Foreign key referencing Users table
			model: 'Users',
			key: 'id'
		}
	},
	gamesId: {
		type: DataTypes.UUID,
		allowNull: false,
		references: { // Foreign key referencing Games table
			model: 'Games',
			key: 'id'
		}
	},
	createdOn: {
		type: DataTypes.DATE,
		allowNull: false
	},
	gameName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	threeDartAverage: {
		type: DataTypes.SMALLINT,
		allowNull: true
	},
}, {
	sequelize,
	modelName: 'CompletedGame'
})

// Define the association between Users and CompletedGames
User.hasMany(CompletedGames, { foreignKey: 'userId' })
CompletedGames.belongsTo(User, { foreignKey: 'userId' })

module.exports = CompletedGames
