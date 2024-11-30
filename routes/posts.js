const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get posts by category
router.get('/category/:category', async (req, res) => {
    try {
        const posts = await Post.find({ category: req.params.category }).sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Add new post
router.post('/', async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const post = await newPost.save();
        res.json(post);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router; 