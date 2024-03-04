const UserStatistics = require('../models/UserStatistics')

const updateUserStatistics = async (userId, body) => {
	return
}

const getUserStatistics = async (userId) => {
	const stats = await UserStatistics.findOne({
		where: {
			userId
		}, 
		raw: true
	})
	return stats
}

module.exports = {
	updateUserStatistics,
	getUserStatistics
}