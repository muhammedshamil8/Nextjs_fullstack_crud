// routes/topics.js
const express = require('express');
const router = express.Router();
const {
    createTopic,
    getTopics,
    getTopic,
    updateTopic,
    deleteTopic
} = require('../controllers/topicController');

// GET all topics
router.get('/', getTopics);

// GET a single topic
router.get('/:id', getTopic);

// POST a new topic
router.post('/', createTopic);

// UPDATE a topic
router.patch('/:id', updateTopic);

// DELETE a topic
router.delete('/:id', deleteTopic);

module.exports = router;
