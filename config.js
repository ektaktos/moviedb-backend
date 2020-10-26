const dotenv = require('dotenv').config();
module.exports = {
    port: process.env.PORT,
    moviedb_key: process.env.API_KEY
}