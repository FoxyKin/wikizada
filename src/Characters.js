import React from 'react';
import './Characters.css';
import Header from './components/Header';
import Infos from './Data'

class Characters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <h2>Um pouco  dos personagens...</h2>
				<p>E estes são alguns dos seres a quem você será apresentado durante sua jornada na verdade sobre o sobrenatural.</p>
        <p>{Infos.Contos[0]}, {Infos.Contos[1]}</p>
        {Infos.Data.map((character, index) => (
          <div key={index} className="personagem">
            <img src={character.image} alt="imagem" className="imgSize"/>
            <div className="self">
              <h2 className="characterName">{character.name}</h2>
              <p className={`class-${index}`}>{character.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
};

export default Characters;