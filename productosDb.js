const Producto = require('./models/Producto');


const muzzarella = new Producto({
    productoNombre:'Muzzarella',
    productoDescripcion:'Queso Muzzarella, Salsa, Aceitunas, Churry',
    productoPrecio:'$ 550',
    productoImagen:'/img/muzza.png'
});

const fugazza = new Producto({
    productoNombre: 'Fugazza',
    productoDescripcion: 'Queso Muzzarella, Salsa, Cebollas, Aceitunas, Churry',
    productoPrecio: '$ 650',
    productoImagen: '/img/fugazza.png'
});

const especial = new Producto({
    productoNombre: 'Especial',
    productoDescripcion: 'Queso Muzzarella, Salsa, Huevo, Jamón, Morrón, Aceitunas, Churry',
    productoPrecio: '$ 850',
    productoImagen: '/img/pizzaEsp.png'
});

const empanadasCarnePicada = new Producto({
    productoNombre: 'Empanadas de Carne por Docena',
    productoDescripcion: 'Carne Picada a Cuchillo, Cebolla, Especias',
    productoPrecio: '$ 1050',
    productoImagen: '/img/empanadasCarne.png'
});

const empanadasCarnePicadaMedia = new Producto({
    productoNombre: 'Empanadas de Carne por Media Docena',
    productoDescripcion: 'Carne Picada a Cuchillo, Cebolla, Especias',
    productoPrecio: '$ 550',
    productoImagen: '/img/empanadasPicada.png'
});

const empanadasJQ = new Producto({
    productoNombre: 'Empanadas por Docena Jamón y Queso',
    productoDescripcion: 'Jamón , Queso, Churry',
    productoPrecio: '$ 1050',
    productoImagen: '/img/empanadasJQ.png'
});

const empanadasJQmedia = new Producto({
    productoNombre: 'Empanadas por Media Docena Jamón y Queso',
    productoDescripcion: 'Jamón , Queso, Churry',
    productoPrecio: '$ 550',
    productoImagen: '/img/empanadasJQ.png'
});

const hamburguesaGrandeSim = new Producto({
    productoNombre: 'Hamburguesa Simple (Para compartir)',
    productoDescripcion: 'Pan Saborizado con Ajo, Carne, Lechuga, Tomate, Churry y Aderezos',
    productoPrecio: '$ 600',
    productoImagen: '/img/hamburguesaSimp.png'
});

const hamburguesaGrandeComp = new Producto({
    productoNombre: 'Hamburguesa Súper (Para compartir)',
    productoDescripcion: 'Pan Saborizado con Ajo, Carne, Jamón, Queso, Huevo, Lechuga, Tomate, Churry y Aderezos',
    productoPrecio: '$ 800',
    productoImagen: '/img/hamburguesaComp.png'
});



const burguerPizza = new Producto({
    productoNombre: 'Burguer-Pizza',
    productoDescripcion: 'Queso Muzzarella, Salsa, Aceitunas, Carne, Jamón, Queso, Huevo, Lechuga, Tomate, Churry y Aderezos',
    productoPrecio: '$ 2200',
    productoImagen: '/img/burguerPizza.png'
});

const papasHogarenasMed = new Producto({
    productoNombre: 'Papas Hogareñas Medianas',
    productoDescripcion: 'Papas al Horno, Especias, Salsa Cheddar, Peregil',
    productoPrecio: '$ 350',
    productoImagen: '/img/papasMed.png'
});

const papasHogarenasGran = new Producto({
    productoNombre: 'Papas Hogareñas Grandes',
    productoDescripcion: 'Papas al Horno, Especias, Salsa Cheddar, Peregil',
    productoPrecio: '$ 400',
    productoImagen: '/img/papasGran.png'
});

const papasHogarenasSup = new Producto({
    productoNombre: 'Super Papas Hogareñas',
    productoDescripcion: 'Papas al Horno, Especias, Jamón, Huevo, Salsa Cheddar, Peregil',
    productoPrecio: '$ 550',
    productoImagen: '/img/papasHogar.png'
});

const guardarProducto = async () => {
    await muzzarella.save();
    await fugazza.save();
    await especial.save();
    await empanadasCarnePicada.save();
    await empanadasCarnePicadaMedia.save();
    await empanadasJQ.save();
    await empanadasJQmedia.save();
    await hamburguesaGrandeSim.save();
    await hamburguesaGrandeComp.save();
    await burguerPizza.save();
    await papasHogarenasMed.save();
    await papasHogarenasGran.save();
    await papasHogarenasSup.save();



} 
module.exports = guardarProducto;