const express = require('express');
const {create} = require('express-handlebars');
const guardarProducto = require('./productosDb');
const guardarPromos = require('./promosDB');
require('./database/db');



const app= express();

app.set("trust proxy", 1);

app.listen(process.env.PORT || 8000, ()=>{
    console.log('Conectado en el puerto 8000')
});
app.use(express.static(__dirname+'/public'));
const hbs = create({
    extname: ".hbs",
    partialsDir: ["./views/partials"],
    
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views","./views");

app.use(express.static(__dirname + '/public'));

app.use('/', require('./Routes/inicio'));
app.get('/promos',require('./Routes/promos'));
app.get('/contacto', (req, res) => {
    res.render('contacto')
});

//guardarProducto();
//guardarPromos();

