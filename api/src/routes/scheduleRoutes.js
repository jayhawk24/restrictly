const express = require('express');
const { Schedule, validationSchema } = require('../models/schedule');
const router = express.Router();

router.get('/schedules', async (req, res) => {
    const schedules = await Schedule.find({}).select('-__v');
    res.json(schedules);
});

router.post('/schedules', async (req, res) => {
    const { error } = validationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const sch = await Schedule.create(req.body);
    res.send(sch);
});

module.exports = router;
