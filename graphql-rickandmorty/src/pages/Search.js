import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';

const GET_CHARACTER_LOCATIONS = gql`
  query getCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState('');

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    { variables: { name } }
  );

  console.log(loading, error, data, called);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>spinner...</div>}
      {error && <div>error...</div>}
      {data &&
        data.characters.results.map((loc, index) => {
          return (
            <div key={index}>
              <p>{loc.location.name}</p>
            </div>
          );
        })}
    </div>
  );
}
