const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Online'));

app.listen(port, () =>
	console.log(`Your app is listening a http://localhost:${port}`)
);