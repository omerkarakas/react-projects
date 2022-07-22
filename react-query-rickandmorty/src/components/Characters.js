import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Character from './Character';

export default function Characters() {
  const [page, setPage] = useState(40);

  const fetchCharacters = async ({ queryKey }) => {
    console.log(queryKey);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, status, isPreviousData } = useQuery(
    ['characters', page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  console.log(data, status, isPreviousData);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character character={character} key={character.id} />
      ))}
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={!data.info.next}
        >
          Next
        </button>
      </div>
    </div>
  );
}
