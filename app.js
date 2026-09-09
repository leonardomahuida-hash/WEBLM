require('dotenv').config();

const express = require('express');
const path = require('path')

const app = express();

const PORT = process.env.PORT;

// configurar EJS
app.set('view engine', 'ejs');

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


// RUTAS

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/servicios', (req, res) => {
  res.render('servicios')
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros')
});

app.get('/contacto', (req, res) => {
  res.render('contacto')
});





app.listen(PORT, () => 
    console.log(`Servidor en http://localhost:${PORT}`)
);