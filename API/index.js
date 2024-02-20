require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
  res.send('Hello World');
});

app.post('/dart/score', (req, res) => {
  try {
    const { score } = req.body;
    console.log('score received: ', score);
    res.status(200).send('Success');
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});