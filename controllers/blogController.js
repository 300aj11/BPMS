const Blog = require('../models/blog');

module.exports = {
    index: (req, res) => {
        Blog.find().sort({ createdAt: -1 }).then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json({ error: 'Unable to fetch data for your request.' });
        });
    },

    details: (req, res) => {
        const id = req.params.id;
        Blog.findById(id).then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(404).json({ error: 'Blog Not Found.' });
        });
    },

    create: (req, res) => {
        const blog = new Blog(req.body);
        blog.save().then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json({ error: 'Unable to create a blog.' });
        });
    },

    del: (req, res) => {
        const id = req.params.id;
        Blog.findByIdAndDelete(id).then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json({ error: 'Unable to delete a blog.' });
        });
    }
};