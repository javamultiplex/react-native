const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

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

app.get('/', (req, res) => {
	res.send('Hi There!!!');
});

app.listen(3000, () => {
	console.log('Listening on Port 3000');
});
