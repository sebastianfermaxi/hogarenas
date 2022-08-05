const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const promoSchema = new Schema({
    promoNombre: {
        type: String,
        required: true
    },
    promoDescripcion: {
        type: String
    },
    promoPrecio: {
        type: String,
        required: true
    },
    promoImagen: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        default: "Promo"
    }
});

module.exports = mongoose.model('Promo', promoSchema);