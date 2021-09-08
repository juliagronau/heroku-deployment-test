const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Simple App to test deployment on heroku'));

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
