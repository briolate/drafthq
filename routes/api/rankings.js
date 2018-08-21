const express = require('express');
const router = express.Router();

// @route   GET api/rankings/test
// @desc    Tests rankings route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Rankings works' }));

module.exports = router;
