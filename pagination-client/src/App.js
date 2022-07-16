import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const prevPage = () => {
    setPage((currentPage) => {
      let newPage = currentPage - 1;
      if (newPage < 0) {
        newPage = data.length - 1;
      }
      return newPage;
    });
  };
  const nextPage = () => {
    setPage((currentPage) => {
      let newPage = currentPage + 1;
      if (newPage >= data.length - 1) {
        newPage = 0;
      }
      return newPage;
    });
  };

  return (
    <main>
      <div className="section-title">
        {loading ? <h1>Loading</h1> : <h1>Pagination Example</h1>}
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers &&
            followers.map((follower, index) => {
              //return <p>{follower.login}</p>;
              return <Follower key={follower.id} {...follower} />;
            })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  // className={
                  //   index === page ? `page-btn active-btn` : `page-btn`
                  // }
                  className={`page-btn ${index === page && 'active-btn'}`}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
