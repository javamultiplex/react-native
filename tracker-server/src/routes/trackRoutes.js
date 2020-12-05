const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');
const Track = mongoose.model('Track');
const router = express.Router();
router.use(requireAuth);

router.get('/tracks', async (req, res) => {
	const tracks = await Track.find({ userId: req.user._id });
	res.send(tracks);
});

router.post('/tracks', async (req, res) => {
	const { name, locations } = req.body;
	if (!name || !locations) {
		return res.status(400).send({ error: 'Must provide name and locations' });
	}

	const track = new Track({ name, locations, userId: req.user._id });
	try {
		await track.save();
	} catch (err) {
		return res.status(500).send(err.messge);
	}
	res.send(track);
});

module.exports = router;
