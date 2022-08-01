const Producto = require('./models/Producto');


const muzzarella = new Producto({
    productoNombre:'Muzzarella',
    productoDescripcion:'Salsa, Queso y Aceitunas',
    productoPrecio:'$ 450',
    productoImagen:'/img/muzza.png'
});

const fugazza = new Producto({
    productoNombre: 'Fugazza',
    productoDescripcion: 'Salsa, Queso, Aceitunas y Cebollas',
    productoPrecio: '$ 500',
    productoImagen: '/img/fugazza.png'
});

const especial = new Producto({
    productoNombre: 'Especial',
    productoDescripcion: 'Salsa, Queso, Aceitunas, Jamón Cocido, Morrón y Huevo',
    productoPrecio: '$ 700',
    productoImagen: '/img/pizzaEsp.png'
});

const empanadasCarne = new Producto({
    productoNombre: 'Empanadas por Docena (Carne Molida)',
    productoDescripcion: 'Con Carne Molida',
    productoPrecio: '$ 900',
    productoImagen: '/img/empanadasCarne.png'
});

const empanadasCarnePicada = new Producto({
    productoNombre: 'Empanadas por Docena (Carne Picada a Cuchillo)',
    productoDescripcion: 'Con Carne Picada a Cuchillo',
    productoPrecio: '$ 900',
    productoImagen: '/img/empanadasPicada.png'
});

const empanadasCarneMedia = new Producto({
    productoNombre: 'Empanadas por Media Docena (Carne Molida)',
    productoDescripcion: 'Con Carne Molida',
    productoPrecio: '$ 500',
    productoImagen: '/img/empanadasCarne.png'
});

const empanadasJQ = new Producto({
    productoNombre: 'Empanadas por Docena (Jamón y Queso)',
    productoDescripcion: 'Jamón y Queso',
    productoPrecio: '$ 500',
    productoImagen: '/img/empanadasJQ.png'
});

const empanadasJQmedia = new Producto({
    productoNombre: 'Empanadas por Media Docena (Jamón y Queso)',
    productoDescripcion: 'Jamón y Queso',
    productoPrecio: '$ 500',
    productoImagen: '/img/empanadasJQ.png'
});

const hamburguesaGrandeComp = new Producto({
    productoNombre: 'Hamburguesa Grande Completa',
    productoDescripcion: 'Tomate, Lechuga, Jamón Cocido, Huevo y Queso',
    productoPrecio: '$ 600',
    productoImagen: '/img/hamburguesaCom.png'
});

const hamburguesaGrandeSim = new Producto({
    productoNombre: 'Hamburguesa Grande Simple',
    productoDescripcion: 'Tomate, Lechuga',
    productoPrecio: '$ 450',
    productoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const burguerPizza = new Producto({
    productoNombre: 'Burguer-Pizza',
    productoDescripcion: 'Tomate, Lechuga, Jamón Cocido, Huevo , Queso y Aceitunas',
    productoPrecio: '$ 1900',
    productoImagen: '/img/burguerPizza.png'
});

const papasHogarenasMed = new Producto({
    productoNombre: 'Papas Hogareñas Medianas',
    productoDescripcion: 'Salsa Cheddar, Peregil',
    productoPrecio: '$ 300',
    productoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const papasHogarenasGran = new Producto({
    productoNombre: 'Papas Hogareñas Grandes',
    productoDescripcion: 'Salsa Cheddar, Peregil',
    productoPrecio: '$ 350',
    productoImagen: '/img/papasGran.png'
});

const papasHogarenasSup = new Producto({
    productoNombre: 'Super Papas Hogareñas',
    productoDescripcion: 'Jamón Cocido, Huevo, Salsa Cheddar, Peregil',
    productoPrecio: '$ 500',
    productoImagen: '/img/superPapasHog.png'
});

const guardarProducto = async () => {
    await muzzarella.save();
    await fugazza.save();
    await especial.save();
    await empanadasCarne.save();
    await empanadasCarnePicada.save();
    await empanadasCarneMedia.save();
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