const express = require('express');
const routes = require('./router');

const app = express();

app.use(express.json())
app.use(routes);

app.listen(3001, () => console.log('👌 Roooodando em http://localhost:3001'))
