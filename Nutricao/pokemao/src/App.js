import React, { useEffect, useState } from 'react';

import './estilo.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    let url = 'https://calmcode.io/static/data/pokemon.json'
    fetch(url)
      .then((dados) => dados.json())
      .then((json) => setPokemon(json))

  }, []);

  return (
    <div className='container'>
      <header>
        <strong className='titulo'>PokeDex</strong>
      </header>
      {pokemon.map((item) => {
        return (
          <article key={item.name} className='post'>
            <strong className='titulo'>{item.name}</strong>
            <p className='subtitulo'>Type: {item.type}</p>
            <p className='subtitulo'>Total: {item.total}</p>
            <p className='subtitulo'>HP: {item.hp}</p>
            <p className='subtitulo'>Attack: {item.attack}</p>
          </article>
        );
      })}
    </div>
  );
}

export default App;