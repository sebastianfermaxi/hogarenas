const {Schema} = require('mongoose');
const mongoose = require('mongoose');

const productoSchema = new Schema({
    productoNombre:{
        type:String,
        required:true
    },
    productoDescripcion: {
        type: String,
        required: true
    },
    productoPrecio: {
        type: String,
        required: true
    },
    productoImagen: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Producto',productoSchema);