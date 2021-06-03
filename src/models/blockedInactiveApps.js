const mongoose = require('mongoose');
const Joi = require('joi');

const schema = {
    app: {
        type: String,
        required: true
    },
    weekdays: {
        type: Number,
        min: 1
    },
    weekends: {
        type: Number,
        min: 1
    }
};

const blockedInactiveApps = new mongoose.Schema('blockedInactiveApps', schema);

const validateApp = (data) => {
    const schema = {
        app: Joi.string().min(2).max(80).required(),
        weekdays: Joi.string().min(1),
        weekends: Joi.string().min(1)
    };

    return Joi.validate(data, schema);
};

module.exports = { validate: validateApp, blockedInactiveApps };
