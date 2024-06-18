// controllers/topicController.js
const Topic = require('../models/topicModel');
const mongoose = require('mongoose');

// Get all topics
const getTopics = async (req, res) => {
    try {
        const topics = await Topic.find({});
        res.status(200).json(topics);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single topic
const getTopic = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Topic not found' });
    }
    try {
        const topic = await Topic.findById(id);
        if (topic) {
            res.status(200).json(topic);
        } else {
            res.status(404).json({ error: 'Topic not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create a new topic
const createTopic = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Please provide a title and description' });
    }
    try {
        const newTopic = await Topic.create({
            title,
            description
        });
        res.status(201).json(newTopic);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a topic
const updateTopic = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Topic not found' });
    }
    try {
        const updatedTopic = await Topic.findByIdAndUpdate(id, req.body, { new: true });
        if (updatedTopic) {
            res.status(200).json(updatedTopic);
        } else {
            res.status(404).json({ error: 'Topic not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a topic
const deleteTopic = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Topic not found' });
    }
    try {
        const deletedTopic = await Topic.findByIdAndDelete(id);
        if (deletedTopic) {
            res.status(200).json({ message: 'Topic deleted successfully' });
        } else {
            res.status(404).json({ error: 'Topic not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createTopic,
    getTopics,
    getTopic,
    updateTopic,
    deleteTopic
};
