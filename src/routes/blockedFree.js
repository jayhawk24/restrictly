const express = require('express');
const { blockedFree, validationSchema } = require('../models/blockedFree');
const router = express.Router();

router.get('/blocked/free', async (req, res) => {
    const blocked = await blockedFree.find({}).select('-__v');
    res.json(blocked);
});

router.post('/blocked/free', async (req, res) => {
    const { error } = validationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const app = await blockedFree.find({ app: req.body.app });
    if (app) return res.status(400).json({ error: 'App already exists' });

    const sch = await blockedFree.create(req.body);
    res.send(sch);
});

module.exports = router;
