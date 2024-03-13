const express = require('express')
const { requiresAuth } = require('express-openid-connect')
const ProfileRouter = express.Router()

ProfileRouter.route('/profile')
	.get(requiresAuth(), (req, res) => {
		res.send(JSON.stringify(req.oidc.user))
	})

module.exports = ProfileRouter