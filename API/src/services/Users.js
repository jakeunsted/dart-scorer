const { User } = require('../models/Users')
const { sequalize } = require('../psql')

const createUser = async () => {
	try {
		const newUser = await User.create({
			username: req.body.username,
			password: req.body.password,
			createdAt: new Date(),
			updatedAt: null,
		})
	} catch (error) {
		console.error('Error creating new user:', error)
	}
}

const updateUsername = async