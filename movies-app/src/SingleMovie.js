import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { API_ENDPOINT } from './context'
import { useGlobalContext } from './context';

const SingleMovie = () => {
  const { id: movieId } = useParams();
  const { loading, error, fetchMovie, movie } = useGlobalContext();
  console.log(movieId);

  useEffect(() => {
    fetchMovie(movieId);
  }, []);

  if (loading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h2>{error.msg}</h2>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    );
  }

  const {
    imdbID: id,
    imdbRating,
    Plot: plot,
    Poster: poster,
    Title: title,
    Year: year,
    Director: director,
    Actors: actors,
    Runtime: duration,
    Awards: awards,
    Genre: genre,
  } = movie;

  return (
    <main className="single-movie">
      <img src={poster} alt="" />

      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <p>
          <strong>Year : &nbsp;</strong>
          {year}
        </p>
        <p>
          <strong>IMDB Rating : &nbsp;</strong>
          {imdbRating}
        </p>
        <p>
          <strong>Genre : &nbsp;</strong>
          {genre}
        </p>
        <p>
          <strong>Director : &nbsp;</strong>
          {director}
        </p>
        <p>
          <strong>Actors : &nbsp;</strong>
          {actors}
        </p>
        <p>
          <strong>Awards : &nbsp;</strong>
          {awards}
        </p>
        <p>
          <strong>Duration : &nbsp;</strong>
          {duration}
        </p>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </main>
  );
};

export default SingleMovie;
