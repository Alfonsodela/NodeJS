const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cinemaSchema = new Schema ({
    name: {type: String, requiered: true },
    location: { type: String, required: true},
    movies: [{ type: mongoose.Types.ObjectId, ref:'Movie' }],
}, {
    timeStamps: true
});

const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = Cinema;