const { DataTypes, Model } = require('sequelize')
const bcrypt = require('bcrypt')
require('dotenv').config()
const { sequelize } = require('../db/psql')

class User extends Model {}

User.init({
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		autoIncrement: true,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false
	},
	username: {
		type: DataTypes.STRING(30),
		unique: true,
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
	},
	isAdmin: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
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

module.exports = { User }

