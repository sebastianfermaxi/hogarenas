const Producto = require('./models/Producto');


const muzzarella = new Producto({
    productoNombre:'Muzzarella',
    productoDescripcion:'Salsa, Queso y Aceitunas',
    productoPrecio:'$ 450',
    productoImagen:'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const fugazza = new Producto({
    productoNombre: 'Fugazza',
    productoDescripcion: 'Salsa, Queso, Aceitunas y Cebollas',
    productoPrecio: '$ 500',
    productoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const especial = new Producto({
    productoNombre: 'Especial',
    productoDescripcion: 'Salsa, Queso, Aceitunas, Jamón Cocido, Morrón y Huevo',
    productoPrecio: '$ 700',
    productoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const empanadasCarne = new Producto({
    productoNombre: 'Empanadas por Docena',
    productoDescripcion: 'Con Carne Picada, Jamón y Queso',
    productoPrecio: '$ 900',
    productoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const empanadasMedia = new Producto({
    productoNombre: 'Empanadas por Media Docena',
    productoDescripcion: 'Con Carne Picada, Jamón y Queso',
    productoPrecio: '$ 500',
    productoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const hamburguesaGrandeComp = new Producto({
    productoNombre: 'Hamburguesa Grande Completa',
    productoDescripcion: 'Tomate, Lechuga, Jamón Cocido, Huevo y Queso',
    productoPrecio: '$ 600',
    productoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
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
    productoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
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
    productoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const papasHogarenasSup = new Producto({
    productoNombre: 'Super Papas Hogareñas',
    productoDescripcion: 'Jamón Cocido, Huevo, Salsa Cheddar, Peregil',
    productoPrecio: '$ 500',
    productoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const guardarProducto = async () => {
    await muzzarella.save();
    await fugazza.save();
    await especial.save();
    await empanadasCarne.save();
    await empanadasMedia.save();
    await hamburguesaGrandeComp.save();
    await hamburguesaGrandeSim.save();
    await burguerPizza.save();
    await papasHogarenasMed.save();
    await papasHogarenasGran.save();
    await papasHogarenasSup.save();



} 
module.exports = guardarProducto;