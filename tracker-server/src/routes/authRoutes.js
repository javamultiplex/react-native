const express = require('express');
const router = express.Router();
router.post('/signup', (req, res) => {
	console.log(req.body);
	res.send('Hi There, this is signup process');
});

module.exports = router;
