const mongoose = require('mongoose');
const Joi = require('joi');

const appSchema = new mongoose.Schema({
    app: {
        type: String,
        required: true
    }
});

const schedule = new mongoose.model('blockedActiveApps', appSchema);

const validateApp = (app) => {
    const schema = {
        app: Joi.string().min(2).max(80).required()
    };

    return Joi.validate(app, schema);
};

module.exports = { validate: validateApp, schedule };
