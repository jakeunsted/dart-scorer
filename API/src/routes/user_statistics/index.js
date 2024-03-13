const express = require('express')
const UserStatisticsRouter = express.Router()
const UserStatisticsService = require('../../services/UserStatistics')

UserStatisticsRouter.route('/user_statistics/:id')
	.put(async (req, res) => {
		try {
			await UserStatisticsService.updateUserStatistics(
				req.params.id,
				req.body
			)
		} catch (error) {
			res.status(500).send(
				'Error updating user statistics:', error.errors
			)
		}
		res.send('User statistics updated')
	})
	.get(async (req, res) => {
		const stats = await UserStatisticsService.getUserStatistics(
			req.params.id
		)
		res.send(stats)
	})

module.exports = UserStatisticsRouter