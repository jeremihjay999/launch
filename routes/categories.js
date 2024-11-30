const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all unique categories
router.get('/', async (req, res) => {
    try {
        const categories = await Post.distinct('category');
        res.json(categories);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router; 