require('dotenv').config() // Load environment variables from .env file

const { Sequelize } = require('sequelize')

// Initialize Sequelize with your database connection information
const sequelize = new Sequelize({
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	dialect: 'postgres', // specify the dialect (postgres)
	port: process.env.DB_PORT,
})

/**
 * Tests the connection to the database.
 * @async
 * @function testConnection
 * @returns {Promise<void>} A promise that resolves
 * when the connection is established successfully.
 * @throws {Error} If unable to connect to the database.
 */
async function testConnection() {
	try {
		await sequelize.authenticate()
		console.log('Connection has been established successfully.')
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}

/**
 * Checks if an admin user exists in the database.
 * If not, creates one with the specified admin username and password.
 * @returns {Promise<void>} A promise that resolves when
 * the admin user is checked or created.
 */
async function checkAdminUser() {
	const { User } = require('../models/Users')
	const user = await User.findOne({ 
		where: { username: process.env.ADMIN_USERNAME } 
	})
	if (!user) {
		console.log(
			'No user with id: 1 found. Creating one with user.admin = true'
		)
		const { createAdminUser } = require('../services/Users')
		await createAdminUser({
			username: process.env.ADMIN_USERNAME,
			password: process.env.ADMIN_PASSWORD
		}).then(() => {
			console.log('Admin user created successfully.')
		})
	} else {
		console.log('Admin user found, username:', user.username)
	}
}

// Export the sequelize instance to use it in other files
module.exports = { sequelize, testConnection, checkAdminUser }
