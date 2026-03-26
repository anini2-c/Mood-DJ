<!DOCTYPE html>
  <html>
npm run build
import React, { useState } from 'react';

function App() {
  const [artista, setArtista] = useState('');
  const [mood, setMood] = useState('');
  const [playlist, setPlaylist] = useState([]);

  const handleSubmit = () => {
    
    console.log('Artista:', artista, 'Mood:', mood);
    
    setPlaylist([`${artista} - Canción 1`, `${artista} - Canción 2`]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Bienvenido a Mood DJ 🎵</h1>

      <div>
        <label>Artista favorito: </label>
        <input
          type="text"
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Estado de ánimo: </label>
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">Selecciona</option>
          <option value="Feliz">Feliz</option>
          <option value="Triste">Triste</option>
          <option value="Relajado">Relajado</option>
          <option value="Energético">Energético</option>
        </select>
      </div>

      <button style={{ marginTop: '10px' }} onClick={handleSubmit}>
        Generar playlist
      </button>

      <div style={{ marginTop: '20px' }}>
        <h2>Playlist sugerida:</h2>
        <ul>
          {playlist.map((cancion, i) => (
            <li key={i}>{cancion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
