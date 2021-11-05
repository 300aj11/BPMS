const express = require('express');
const blogRoutes = require('./blogRoutes');

const router = express.Router();

router.use('/blog', blogRoutes);

module.exports = router;