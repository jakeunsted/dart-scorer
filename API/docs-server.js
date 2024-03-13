const express = require('express');
const path = require('path');
const app = express();
app.use('/', express.static(path.join(__dirname, './docs')));
app.listen(3001, () => {
  console.log('Documentation Server started: http://localhost:3001/');
});