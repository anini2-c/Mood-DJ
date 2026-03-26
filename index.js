// backend/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// backend/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

// RUTA 1: Guardar artista favorito
app.post('/api/artista', (req, res) => {
  const { usuario_id, artista, genero } = req.body;
  // Aquí conectas con la DB para guardar el artista
  console.log(`Usuario ${usuario_id} agregó: ${artista} (${genero})`);
  res.send({ mensaje: 'Artista guardado!' });
});

// RUTA 2: Guardar mood del día
app.post('/api/mood', (req, res) => {
  const { usuario_id, mood, actividad } = req.body;
  // Guardas en la DB
  console.log(`Usuario ${usuario_id} está ${mood} y ${actividad}`);
  res.send({ mensaje: 'Mood guardado!' });
});

// RUTA 3: Obtener playlist sugerida
app.get('/api/playlist/:usuario_id', (req, res) => {
  const { usuario_id } = req.params;
  // Aquí podrías filtrar canciones según gustos + mood
  const playlist = ['Canción 1', 'Canción 2', 'Canción 3'];
  res.send({ playlist });
});

app.listen(5000, () => {
  console.log('Servidor corriendo en puerto 5000');
});
