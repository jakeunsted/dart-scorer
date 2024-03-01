const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')
const { User } = './Users.js'

class CompletedGames extends Model {}

CompletedGames.init({
	id: {
		type: DataTypes.UUID,
		autoIncrement: true,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false
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
	userId: {
		type: DataTypes.UUID,
		allowNull: false,
		references: { // Foreign key referencing Users table
			model: 'Users',
			key: 'id'
		}
	}
}, {
	sequelize,
	modelName: 'CompletedGame'
})

// Define the association between Users and CompletedGames
User.hasMany(CompletedGames, { foreignKey: 'userId' })
CompletedGames.belongsTo(User, { foreignKey: 'userId' })

module.exports = CompletedGames
