const express = require('express');
var routes = require('./routes/index');
var cors = require('cors');

const app = express();


app.use(cors())
app.use(express.json());

app.use('/', routes);

app.listen(4000, () => {
    console.log('listening on port 4000');
})