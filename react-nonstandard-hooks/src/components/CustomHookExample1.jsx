import React from 'react';
import useFetch from '../hooks/useFetch';

function CustomHookExample1() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );
  //console.log(res);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Error!!!</h3>;
  }
  return (
    <div>
      {data.map((post, index) => {
        return <h3 key={index}>{post.title}</h3>;
      })}
    </div>
  );

  return <div>custom hook example</div>;
}

export default CustomHookExample1;
