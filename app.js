require('dotenv').config();

const express = require('express');
const path = require('path')

const app = express();

const PORT = process.env.PORT;

// configurar EJS
app.set('view engine', 'ejs');

// MIDDLEWARES
// permite leer indormacion enviada por formularios html 
app.use(express.urlencoded({ extended: true}));

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

app.post('/contacto',(req,res) => {

  const { nombre, correo, Asunto, mensaje } = req.body;

  console.log('-------------------');
  console.log('mensaje');
  console.log('-------------------');
  console.log('nombre',nombre);
  console.log('correo',correo);
  console.log('Asunto',Asunto);
  console.log('mensaje',mensaje);

  res.render('contacto');
  
});





app.listen(PORT, () => 
    console.log(`Servidor en http://localhost:${PORT}`)
);