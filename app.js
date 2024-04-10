const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('./server/api');
const authRoutes = require('./server/auth');
const db = require('./server/db');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

module.exports = app;