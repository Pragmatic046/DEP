const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const Message = require('../models/Message');

// Welcome Page
router.get('/', (req, res) => res.render('index'));

// Chat Page
router.get('/chat', ensureAuthenticated, async (req, res) => {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.render('chat', {
        user: req.user,
        messages
    });
});

module.exports = router;
