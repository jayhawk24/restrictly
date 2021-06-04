const mongoose = require('mongoose');
const Joi = require('joi');

const appSchema = new mongoose.Schema({
    app: {
        type: String,
        required: true,
        unique: true
    }
});

const blockedApps = new mongoose.model('blockedApps', appSchema);

const validationSchema = Joi.object({
    app: Joi.string().min(2).max(80).required()
});

module.exports = { validationSchema, blockedApps };
