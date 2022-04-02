import React from "react";
import "./Movie.css";

export default function Movie({ data }) {
  // genre's to array for mapping
  const genreArray = [];
  data.Genre.split(", ").map((e) => {
    genreArray.push(e);
  });
  // ratings :
  let imdb;
  let rotten;
  let metacritic;
  const ratings = data.Ratings;
  const rateeeees = ratings.map((element) => {
    if (element.Source === "Internet Movie Database") {
      imdb = element.Value.slice(0, 3);
    }
    if (element.Source === "Rotten Tomatoes") {
      rotten = element.Value;
    }
    if (element.Source === "Metacritic") {
      metacritic = element.Value.slice(0, 2);
    }
  });
  return (
    <div>
      <div className="movie-container">
        <div className="movie-detail">
          <h1>{data.Title}</h1>
          <p className="moviePlot">{data.Plot}</p>
          <div className="actors">
            <h4>The Cast</h4>
            <div className="actorscast">{data.Actors}</div>
          </div>
          <div className="movie-ratings">
            <h4>Ratings</h4>
            <div className="ratingsflex">
              {imdb && (
                <div className="rateflexrow">
                  <div className="ratevalue">
                    {imdb}
                    <span>/10</span>
                  </div>
                  <p className="ratepropertyname">IMDB</p>
                  <div className="progress">
                    <div
                      className="progressvalue"
                      style={{
                        width: `${imdb * 10}%`,
                        backgroundColor: "#3562f3",
                      }}
                    ></div>
                  </div>
                </div>
              )}
              {rotten && (
                <div className="rateflexrow">
                  <div className="ratevalue">{rotten}</div>
                  <p className="ratepropertyname">ROTTEN TOMATOES</p>
                  <div className="progress">
                    <div
                      className="progressvalue"
                      style={{
                        width: `${rotten}`,
                        backgroundColor: "#feb724",
                      }}
                    ></div>
                  </div>
                </div>
              )}
              {metacritic && (
                <div className="rateflexrow">
                  <div className="ratevalue">{metacritic}%</div>
                  <p className="ratepropertyname">METACRITIC</p>
                  <div className="progress">
                    <div
                      className="progressvalue"
                      style={{
                        width: `${metacritic}%`,
                        backgroundColor: "#81bdf0",
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="movie-image">
          <img src={data.Poster} alt="" />
          <div className="imagedetails">
            <div className="genres mt-2">
              <ul>
                {genreArray.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="runtime">
              <p className="propertyname">INITIAL RELEASE</p>
              <p className="propertyvalue">{data.Released}</p>
            </div>
            <div className="runtime">
              <p className="propertyname">LENGHT</p>
              <p className="propertyvalue">{data.Runtime}</p>
            </div>
            <div className="director">
              <p className="propertyname">DIRECTOR</p>
              <p className="propertyvalue">{data.Director}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
