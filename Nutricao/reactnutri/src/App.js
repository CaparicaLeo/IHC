import React, { useEffect, useState } from 'react';

import './estilo.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    fetch(url)
      .then((dados) => dados.json())
      .then((json) => setNutri(json))

  }, []);

  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id}
            className='post'>
            <strong className='titulo'>{item.
              titulo}</strong>
            <img src={item.capa} 
              className='capa' />
            <p className='subtitulo'>{item.
              subtitulo}</p>
          </article>
        );
      })}

    </div>
  );
}

export default App;