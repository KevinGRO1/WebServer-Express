const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//EL __dirname es necesario ya que los directorios son dinamicos
// este nos permite concatenar cualquier otra ubicion con la direccion a colocar
app.use(express.static(__dirname + '/public'));

// EXPRESS HBS engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


//Pad para que se muestre la ventana HOME
app.get('/', (req, res) => {

    //res.render('home');
    res.render('home', {
        nombre: 'keVIn'
    });
    // res.render('home');
    //res.send('Hola mundo')
});

//Pad para que se muestre la ventana ABOUT
app.get('/about', (req, res) => {

    res.render('about');
})



app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));