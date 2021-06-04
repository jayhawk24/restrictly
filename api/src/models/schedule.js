const mongoose = require('mongoose');
const Joi = require('joi');

const scheduleSchema = new mongoose.Schema({
    days: [
        {
            type: Number,
            max: 7,
            min: 1,
            required: true
        }
    ],
    from: {
        type: Number,
        min: 0000,
        max: 2359,
        required: true
    },
    to: {
        type: Number,
        min: 0000,
        max: 2359,
        required: true
    }
});

const Schedule = mongoose.model('schedules', scheduleSchema);

const validationSchema = Joi.object({
    days: Joi.array().items(Joi.number().min(1).max(7)).required(),
    from: Joi.number().min(0000).max(2359).required(),
    to: Joi.number().min(0000).max(2359).required()
});

module.exports = { Schedule, validationSchema };
