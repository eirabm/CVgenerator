import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
const hostname:string = '127.0.0.1';
const port:number = 8000;
const routes = require('./routes/index');



app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(cors())
app.use('/api', routes);


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});

