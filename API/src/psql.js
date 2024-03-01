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

// Test the connection
async function testConnection() {
	try {
		await sequelize.authenticate()
		console.log('Connection has been established successfully.')
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}

testConnection() // Call the function to test the connection

// Export the sequelize instance to use it in other files
module.exports = sequelize
