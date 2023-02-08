const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config')
const cors = require('cors');
const app = express();


//DB
dbConnection();

app.use(cors())

//directorio público
app.use(express.static('public'));

//lectura y parseo del body
app.use(express.json());

//rutas
app.use('/api/auth', require('./routes/auth'));


app.listen(process.env.PORT, () => {
    console.log('server')
});