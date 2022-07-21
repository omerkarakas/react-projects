import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacter.js';
import './Character.css';
import { MdOutlineArrowBack } from 'react-icons/md';

function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);
  if (loading) {
    return <div className="CharactersList">Loading ...</div>;
  }
  if (error) {
    return <div className="CharactersList">Error!!!</div>;
  }

  const item = data.character;
  return (
    <div className="Character">
      <div>
        <Link to="/">
          <MdOutlineArrowBack size={50} />
        </Link>

        <img src={item.image} width="750" height="750" alt={item.name} />
      </div>
      <div className="Character-content">
        <h1>{item.name}</h1>
        <p>{item.gender}</p>
        <div className="Character-episode">
          {item.episode.map((ep, index) => {
            return (
              <div key={index}>
                {ep.name} - <b>{ep.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Character;
