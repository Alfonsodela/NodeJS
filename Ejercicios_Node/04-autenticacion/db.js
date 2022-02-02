// Connexion con MongoDB
const mongoose = require('mongoose')

const DB_URL = 'mongodb+srv://admin:admin@upgradealfonso.qm5hu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB = () => mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = { connectDB, DB_URL };
