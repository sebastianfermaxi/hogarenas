const Promos = require("../models/Promo");

const leerPromos = async (req,res)=>{
    try {
        const promos = await Promos.find({tipo:"Promo"}).lean();
        //console.log(promos)
        res.render('promos',{promos});
    } catch (error) {
        console.log(error);
    }
};

module.exports = leerPromos;