const express = require('express');
const path = require('path');
const {create} = require('express-handlebars');
const guardarProducto = require('./productosDb');
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



app.use('/', require('./Routes/inicio'));
app.get('/promos', (req,res)=>{
    res.render('promos')
});
app.get('/contacto', (req, res) => {
    res.render('contacto')
});

//guardarProducto();
