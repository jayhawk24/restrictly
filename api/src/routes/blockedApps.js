const express = require('express');
const { blockedApps, validationSchema } = require('../models/blockedApps');
const router = express.Router();

router.get('/blocked', async (req, res) => {
    const blocked = await blockedApps.find({}).select('-__v');
    res.json(blocked);
});

router.post('/blocked', async (req, res) => {
    const { error } = validationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const app = await blockedApps.find({ app: req.body.app });
    if (app) return res.status(400).json({ error: 'App already exists' });

    const sch = await blockedApps.create(req.body);
    res.send(sch);
});

module.exports = router;
