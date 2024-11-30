const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve admin.html for /admin route
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('MongoDB connection error:', err));

// // Blog Post Schema
// const blogSchema = new mongoose.Schema({
//     title: String,
//     category: String,
//     image: String,
//     summary: String,
//     content: String,
//     readTime: Number,
//     date: { type: Date, default: Date.now }
// });

// const BlogPost = mongoose.model('BlogPost', blogSchema);

// // API Routes
// app.get('/api/posts', async (req, res) => {
//     try {
//         const posts = await BlogPost.find().sort({ date: -1 });
//         res.json(posts);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.post('/api/posts', async (req, res) => {
//     try {
//         const post = new BlogPost(req.body);
//         await post.save();
//         res.status(201).json(post);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// app.delete('/api/posts/:id', async (req, res) => {
//     try {
//         await BlogPost.findByIdAndDelete(req.params.id);
//         res.json({ message: 'Post deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 