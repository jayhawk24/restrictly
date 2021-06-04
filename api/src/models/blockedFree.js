const mongoose = require('mongoose');
const Joi = require('joi');

const schema = new mongoose.Schema({
    app: {
        type: String,
        required: true,
        unique: true
    },
    weekdays: {
        type: Number,
        min: 1
    },
    weekends: {
        type: Number,
        min: 1
    }
});

const blockedFree = mongoose.model('blockedFree', schema);

const validationSchema = Joi.object({
    app: Joi.string().min(2).max(80).required(),
    weekdays: Joi.number().min(1),
    weekends: Joi.number().min(1)
});

module.exports = { validationSchema, blockedFree };
