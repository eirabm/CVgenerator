declare function require(name:string);
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port = 8000;
const routes = require('./routes');



app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(cors())
app.use('/api', routes);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});

