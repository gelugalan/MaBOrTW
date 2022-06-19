const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateStart: {
        type: Date,
        required: true
    },
    dateEnd: {
        type: Date,
        required: true
    },
    ageLimit: {
        type: Number,
        required: true
    },
    participants: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('EventSchema', eventSchema);