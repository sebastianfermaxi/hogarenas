const Producto = require("../models/Producto");


const leerProductos = async(req,res) => {
    try {
        const productos = await Producto.find({}).lean();
        res.render("inicio",{productos:productos});
        //console.log(productos)
    } catch (error) {
        console.log('error'+error)
    }
    
};

module.exports = leerProductos;