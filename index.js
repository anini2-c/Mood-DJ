// backend/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Ruta ejemplo
app.get('/', (req, res) => {
  res.send('Mood DJ Backend funcionando! 🎧');
});

// Aquí podrías agregar rutas para guardar artistas, moods, historial
// Ejemplo: POST /api/artista o /api/mood

app.listen(5000, () => {
  console.log('Servidor corriendo en puerto 5000');
});
