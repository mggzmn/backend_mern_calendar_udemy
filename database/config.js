const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('DB online')
    } catch (error) {
        throw new Error('error a la hora de inicializar la bd')
    }
}

module.exports = {
    dbConnection
}