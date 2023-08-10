import React, { useState } from 'react';
import Recettes from '../recettes';

function Recherche() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <input
        className="rechercher"
        placeholder="Rechercher..."
        onChange={event => setQuery(event.target.value)}
      />

      <div className="list">
        {Recettes.filter(recette => {
          if (query === '') {
            return true;
          }
          return recette.name.toLowerCase().includes(query.toLowerCase());
        }).length > 0 ? (
          Recettes.filter(recette => {
            if (query === '') {
              return true;
            }
            return recette.name.toLowerCase().includes(query.toLowerCase());
          }).map(recette => (
            <div className="card" key={recette.name}>
              <img src={require(`../assets/${recette.name}.jpg`)} alt={recette.name} />
              <h2>{recette.name}</h2>
              <p className="description">{recette.description}</p>
              {recette.ingredients.map((ingredient, index) => (
                <p className="ingredient" key={index}>
                  {ingredient.ingredient}
                </p>
              ))}
            </div>
          ))
        ) : (
          <p>Veuillez saisir une recette existante svp.</p>
        )}
      </div>
    </div>
  );
}

export default Recherche;