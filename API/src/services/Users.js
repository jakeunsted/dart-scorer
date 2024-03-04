const { User } = require('../models/Users')
// const { sequelize } = require('../db/psql')

/**
 * Creates a new user.
 * @param {Object} newUser - The new user object.
 * @param {string} newUser.username - The username of the new user.
 * @param {string} newUser.password - The password of the new user.
 * @returns {Object|null} - The created user object or 
 * null if an error occurred.
 */
const createUser = async (newUser) => {
	console.log('Creating new user:', newUser)
	try {
		const user = await User.create({
			username: newUser.username,
			password: newUser.password,
			createdAt: new Date(),
			updatedAt: null,
			isAdmin: false
		})
		console.log('User created:', user.toJSON())
		return user.toJSON()
	} catch (error) {
		console.error('Error creating new user:', error)
		return null
	}
}

/**
 * Creates a new user in the database.
 * @param {Object} newUser - The user object containing the username,
 * password, and isAdmin status.
 * @param {string} newUser.username - The username of the new user.
 * @param {string} newUser.password - The password of the new user.
 * @returns {Promise<Object>|null} - A promise that resolves to the
 * created user object.
 */
const createAdminUser = async (newUser) => {
	console.log('Creating new admin user:', newUser)
	try {
		const user = await User.create({
			username: newUser.username,
			password: newUser.password,
			createdAt: new Date(),
			updatedAt: null,
			isAdmin: true
		})
		console.log('Admin user created:', user.toJSON())
		return user.toJSON()
	} catch (error) {
		console.error('Error creating new admin user:', error)
		return null
	}
}

/**
 * Checks if the user with the given ID is an admin.
 * @param {number} id - The ID of the user to check.
 * @returns {Promise<boolean>} - A promise that resolves to a 
 * boolean indicating whether the user is an admin or not.
 */
const isIdAdmin = async (id) => {
	try {
		const user = await User.findByPk(id)
		console.log('isIdAdmin user:', id, ' ', user.toJSON())
		return user.toJSON().isAdmin || false
	} catch (error) {
		console.error('Error checking if user ID is admin:', error)
		return false
	}
}

module.exports = {
	createUser,
	isIdAdmin,
	createAdminUser
}