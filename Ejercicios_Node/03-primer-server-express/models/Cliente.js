const mongoose = require('mongoose');

const Schema = mongoose.Schema

const clienteSchema = new Schema({
        name: { type: String, required: true },
        surname: { type: String },
        
        coches: [{ type: mongoose.Types.ObjectId, ref: 'Coche' }],
      },
      {
        timestamps: true,
      }
    );
    
    const cliente = mongoose.model('Cliente', clienteSchema);
    module.exports = Cliente;
})