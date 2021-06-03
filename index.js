const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ hello: 'world' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});
