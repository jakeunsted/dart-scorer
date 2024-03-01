const { Sequelize, DataTypes, Model } = require('sequelize')
const bcrypt = require('bcrypt')
require('dotenv').config()

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
		type: DataTypes.STRING(30),
		allowNull: false
	},
	password: {
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
	modelName: 'User',
	hooks: {
		async beforeCreate(user) {
			// Hash the password before saving to the database
			const hashedPassword = await bcrypt.hash(user.password, 10)
			console.log('beforeCreate User Password')
			user.password = hashedPassword
		},
		async beforeUpdate(user) {
			// Hash the password before updating the database
			if (user.changed('password')) {
				const hashedPassword = await bcrypt.hash(user.password, 10)
				console.log('beforeUpdate User Password')
				user.password = hashedPassword
			}
		}
	}
})

module.exports = User

