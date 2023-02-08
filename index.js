const express = require('express');
require('dotenv').config();

const app = express();
//directorio público
app.use(express.static('public'));

app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log('server')
});