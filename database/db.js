const mongoose = require('mongoose');
require('dotenv').config();
mongoose
    .connect(process.env.URI)
    .then((e)=>{console.log('DB conectada')})
    .catch(e => console.log('error'+ e))