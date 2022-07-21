import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import './CharactersList.css';

function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) {
    return <div className="CharactersList">Loading ...</div>;
  }
  if (error) {
    return <div className="CharactersList">Error!!!</div>;
  }
  const charListItem = data.characters.results.map((item, index) => {
    return (
      <div>
        <Link to={`/${item.id}`} key={index} className="img-div">
          <img src={item.image} alt={item.name} width="300" height="300" />
          <h3> {item.name}</h3>
        </Link>
      </div>
    );
  });

  return <div className="CharactersList">{charListItem}</div>;
}

export default CharactersList;
