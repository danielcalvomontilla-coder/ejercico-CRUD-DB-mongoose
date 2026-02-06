const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const dbConexion = async () => {
    try {
        await mongoose.connect(MONGO_URI); 
    }catch (error) {
        console.log(error);
    }
}

module.exports = dbConexion;