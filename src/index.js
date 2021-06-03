const express = require('express');
const app = express();
const dotenv = require('dotenv');
const scheduleRoutes = require('./routes/scheduleRoutes');

dotenv.config();

require('./config/db')();
require('./config/cors')(app);

app.use(express.json());

app.use(scheduleRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});
