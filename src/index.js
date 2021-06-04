const express = require('express');
const app = express();
const dotenv = require('dotenv');
const scheduleRoutes = require('./routes/scheduleRoutes');
const blockedApps = require('./routes/blockedApps');
const blockedFree = require('./routes/blockedFree');
const err = require('./config/error');

dotenv.config();

require('./config/db')();
require('./config/cors')(app);

app.use(express.json());

app.use(scheduleRoutes);
app.use(blockedApps);
app.use(blockedFree);

app.use(err);
app.use('*', (req, res) => {
    res.status(404).json({ error: '404 not found' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});
