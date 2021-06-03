const express = require('express');
const { Schedule, validationSchema } = require('../models/schedule');
const router = express.Router();

router.get('/schedules', async (req, res) => {
    const schedules = await Schedule.find({});
    res.json(schedules);
});

router.post('/schedules', async (req, res) => {
    const { error } = validationSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const id = await Schedule.create(req.body);
    res.send(id);
});

module.exports = router;
