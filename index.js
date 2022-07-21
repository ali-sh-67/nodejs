const express = require('express');
const app = express();

const mongoose = require('mongoose');
const debug = require('debug')('app:main');
const config = require('config');

const router = require('./src/routes/index')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


mongoose.connect(config.get('db.address'))
    .then(() => debug('connected to mongodb:authproject'))
    .catch(() => debug('could not connect to mongodb'));


app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
