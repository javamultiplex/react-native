require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth');
const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);
const mongoUri =
	'mongodb+srv://admin:admin@cluster0.3foxl.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('Connected successfully');
});

mongoose.connection.on('error', err => {
	console.error('Error in connection', err);
});

app.get('/', requireAuth, (req, res) => {
	res.send(`Your email address is : ${req.user.email}`);
});

app.listen(3000, () => {
	console.log('Listening on Port 3000');
});
