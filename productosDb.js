const Producto = require('./models/Producto');


const muzzarella = new Producto({
    productoNombre:'Muzzarella',
    productoDescripcion:'Salsa, Queso y Aceitunas',
    productoPrecio:'$ 550',
    productoImagen:'/img/muzza.png'
});

const fugazza = new Producto({
    productoNombre: 'Fugazza',
    productoDescripcion: 'Salsa, Queso, Aceitunas y Cebollas',
    productoPrecio: '$ 650',
    productoImagen: '/img/fugazza.png'
});

const especial = new Producto({
    productoNombre: 'Especial',
    productoDescripcion: 'Salsa, Queso, Aceitunas, Jamón Cocido, Morrón y Huevo',
    productoPrecio: '$ 850',
    productoImagen: '/img/pizzaEsp.png'
});

const empanadasCarnePicada = new Producto({
    productoNombre: 'Empanadas por Docena (Carne Picada a Cuchillo)',
    productoDescripcion: 'Con Carne Picada a Cuchillo',
    productoPrecio: '$ 1050',
    productoImagen: '/img/empanadasCarne.png'
});

const empanadasCarnePicadaMedia = new Producto({
    productoNombre: 'Empanadas por Media Docena (Carne Picada a Cuchillo)',
    productoDescripcion: 'Con Carne Picada a Cuchillo',
    productoPrecio: '$ 550',
    productoImagen: '/img/empanadasPicada.png'
});

const empanadasJQ = new Producto({
    productoNombre: 'Empanadas por Docena (Jamón y Queso)',
    productoDescripcion: 'Jamón y Queso',
    productoPrecio: '$ 1050',
    productoImagen: '/img/empanadasJQ.png'
});

const empanadasJQmedia = new Producto({
    productoNombre: 'Empanadas por Media Docena (Jamón y Queso)',
    productoDescripcion: 'Jamón y Queso',
    productoPrecio: '$ 550',
    productoImagen: '/img/empanadasJQ.png'
});

const hamburguesaGrandeComp = new Producto({
    productoNombre: 'Hamburguesa Súper (Para compartir)',
    productoDescripcion: 'Tomate, Lechuga, Jamón Cocido, Huevo y Queso',
    productoPrecio: '$ 800',
    productoImagen: '/img/hamburguesaComp.png'
});

const hamburguesaGrandeSim = new Producto({
    productoNombre: 'Hamburguesa Simple (Para compartir)',
    productoDescripcion: 'Tomate, Lechuga',
    productoPrecio: '$ 600',
    productoImagen: '/img/hamburguesaSimp.png'
});

const burguerPizza = new Producto({
    productoNombre: 'Burguer-Pizza',
    productoDescripcion: 'Tomate, Lechuga, Jamón Cocido, Huevo , Queso y Aceitunas',
    productoPrecio: '$ 2200',
    productoImagen: '/img/burguerPizza.png'
});

const papasHogarenasMed = new Producto({
    productoNombre: 'Papas Hogareñas Medianas',
    productoDescripcion: 'Salsa Cheddar, Peregil',
    productoPrecio: '$ 350',
    productoImagen: '/img/papasMed.png'
});

const papasHogarenasGran = new Producto({
    productoNombre: 'Papas Hogareñas Grandes',
    productoDescripcion: 'Salsa Cheddar, Peregil',
    productoPrecio: '$ 400',
    productoImagen: '/img/papasGran.png'
});

const papasHogarenasSup = new Producto({
    productoNombre: 'Super Papas Hogareñas',
    productoDescripcion: 'Jamón Cocido, Huevo, Salsa Cheddar, Peregil',
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
    await hamburguesaGrandeComp.save();
    await hamburguesaGrandeSim.save();
    await burguerPizza.save();
    await papasHogarenasMed.save();
    await papasHogarenasGran.save();
    await papasHogarenasSup.save();



} 
module.exports = guardarProducto;