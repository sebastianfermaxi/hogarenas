const Promos = require('./models/Promo');


const promo1 = new Promos({
    promoNombre: 'Especial + Muzza',
    promoDescripcion: 'Promo 1',
    promoPrecio: '$ 1350',
    promoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const promo2 = new Promos({
    promoNombre: 'Muzza + Fugazza',
    promoDescripcion: 'Promo 2',
    promoPrecio: '$ 1100',
    promoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const promo3 = new Promos({
    promoNombre: 'Muzza + Doc. Empanadas',
    promoDescripcion: 'Promo 3',
    promoPrecio: '$ 1550',
    promoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const promo4 = new Promos({
    promoNombre: '2 Hamburguesas Súper Completas',
    promoDescripcion: 'Promo 4',
    promoPrecio: '$ 1500',
    promoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const promo5 = new Promos({
    promoNombre: 'BurguerPizza + Súper Papas Hogareñas',
    promoDescripcion: 'Promo 5',
    promoPrecio: '$ 2650',
    promoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});

const promo6 = new Promos({
    promoNombre: '2 Muzzas + 1/2 Doc. Empanadas',
    promoDescripcion: 'Promo 6',
    promoPrecio: '$ 1600',
    promoImagen: 'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'
});
const guardarPromos = async () => {
    await promo1.save();   
    await promo2.save();
    await promo3.save();
    await promo4.save();
    await promo5.save();
    await promo6.save();
}
module.exports = guardarPromos;