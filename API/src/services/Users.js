const { User } = require('../models/Users')
// const { sequalize } = require('../psql')

const createUser = async (newUser) => {
	console.log('Creating new user:', newUser)
	try {
		const user = await User.create({
			username: newUser.username,
			password: newUser.password,
			createdAt: new Date(),
			updatedAt: null,
		})
		console.log('User created:', user.toJSON())
		return user.toJSON()
	} catch (error) {
		console.error('Error creating new user:', error)
		return null
	}
}

module.exports = {
	createUser
}