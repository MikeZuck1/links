import React from 'react';
import './style.css';

function App() {
  const linkImages = {
    dog: 'https://jardinage.lemonde.fr/images/dossiers/2022-07/langage-chien-(2)-151744.jpg', 
    cat: 'https://img.passeportsante.net/1200x675/2021-05-06/i106626-signes-bonne-sante-du-chat.webp', 
    bird: 'https://oiseaux.natagora.be/sites/dqo/files/styles/animal_tea/public/2023-01/mescha_m.JPG?itok=yRoTgDmj', 
  }

  return (
    <div>
      <a href='#' target='_blank' rel="noreferrer">
        <img src={linkImages.dog} alt='dog' />
      </a>
      <a href='#' target='_blank' rel="noreferrer">
        <img src={linkImages.cat} alt='cat' />
      </a>
      <a href='#' target='_blank' rel="noreferrer">  
        <img src={linkImages.bird} alt='bird' />
      </a>
    </div>
  );
}

export default App;  