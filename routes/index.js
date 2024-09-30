const express = require('express');
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

const router = express.Router();

// Use API routes
router.use('/api', apiRoutes);

// Use HTML routes
router.use('/', htmlRoutes);

module.exports = router;
