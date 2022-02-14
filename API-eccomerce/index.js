
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const routes = require('./routes/routes')
app.use(routes);


app.listen(5000, ()=> {
    console.log('servidor iniciado em: http://localhost:5000')
});