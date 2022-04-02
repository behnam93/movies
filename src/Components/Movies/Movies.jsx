import React from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

export default function Movies({ movies, h2title, whichApi }) {
  console.log(movies);
  if (whichApi === "omdb") {
    return (
      <div className="movies-list">
        <h2>{h2title}</h2>
        <div className="movie-grid">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`}>
              <div className="movie">
                {movie.Poster === "N/A" ? (
                  <img
                    src="https://imdb-api.com/images/360x440/nopicture.jpg"
                    key="{scarlet1}"
                    alt="No Image"
                  />
                ) : (
                  <img src={movie.Poster} alt={movie.Title} />
                )}
                {movie.imDbRating && (
                  <div className="imdb">{movie.imDbRating}</div>
                )}
                <div className="movie-name">
                  {movie.Title} {movie.Year}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="movies-list">
      <h2>{h2title}</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={movie.image.replace("original", "360x440")}
                key="{scarlet3}"
                alt={movie.fullTitle}
              />
              {movie.imDbRating && (
                <div className="imdb">{movie.imDbRating}</div>
              )}
              <div className="movie-name">
                {movie.fullTitle}{" "}
                {movie.releaseState && (
                  <p style={{ fontSize: "0.7rem" }}>
                    Release: {movie.releaseState}
                  </p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
