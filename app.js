require('dotenv').congig();

const express = require('express');
const path = require('path')

const app = express();

const PORT = process.env.PORT;
console.log(PORT)

// configurar EJS
app.set('view engine', 'ejs');

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))


// RUTAS

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/servicio', (req, res) => {
  res.render('servicios')
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros')
});

app.get('/contacto', (req, res) => {
  res.render('contanto')
});
















app.listen(PORT,() => {
  console.log('servidor corriendo en http://localhost:${PORT}')
})