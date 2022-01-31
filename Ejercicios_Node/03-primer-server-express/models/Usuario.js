const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    name: {type: String, requiered: true },
    surname: { type: String, required: true},
    age: { type: Number, required: true},
    coches: [{type: mongoose.Types.ObjectId, ref: 'Coche' }],
}, {
    timeStamps: true
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;