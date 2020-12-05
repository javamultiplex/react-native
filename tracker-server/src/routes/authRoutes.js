const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const router = express.Router();
router.post('/signup', async (req, res) => {
	const { email, password } = req.body;
	const user = new User({ email, password });
	try {
		await user.save();
	} catch (err) {
		return res.status(422).send(err.message);
	}

	const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
	res.send({ token });
});

router.post('/signin', async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).send({ error: 'Email and Password is required' });
	}

	const user = await User.findOne({ email });

	if (!user) {
		return res.status(401).send({ error: 'Invalid email or password' });
	}

	try {
		await user.comparePassword(password, user.password);
	} catch (err) {
		console.error(err);
		return res.status(401).send({ error: 'Invalid email or password' });
	}

	const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
	res.send({ token });
});

module.exports = router;
