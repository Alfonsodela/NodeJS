const mongoose = require('mongoose')

const DB_URL = 'mongodb+srv://admin:admin@moviesdb.qwqnf.mongodb.net/Movies?retryWrites=true&w=majority'


const connectDB = () => mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = { connectDB };
