const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

module.exports  = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

