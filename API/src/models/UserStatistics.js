const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../psql')
const { User } = require('./Users.js')

class UserStatistics extends Model {}

UserStatistics.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		autoIncrement: true,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false
	},
	userId: {
		type: DataTypes.UUID,
		allowNull: false,
		unique: true,
		references: { // Foreign key referencing Users table
			model: 'Users',
			key: 'id'
		}
	},
	totalGamesPlayed: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	threeDartAverage: {
		type: DataTypes.SMALLINT,
		allowNull: false
	},
	highestCheckout: {
		type: DataTypes.SMALLINT,
		allowNull: false
	}
}, {
	sequelize,
	modelName: 'UserStatistics',
	timestamps: false
})

User.hasOne(UserStatistics, { foreignKey: 'userId' })
UserStatistics.belongsTo(User, { foreignKey: 'userId' })

module.exports = UserStatistics