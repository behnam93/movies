import "./Search.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/css";
import Movies from "../../Components/Movies/Movies";
import { useFetch } from "../../Components/UseFetch";

export default function Search() {
  const location = useLocation().search;
  const queryParams = new URLSearchParams(location);
  const query = queryParams.get("q");
  const url = `https://www.omdbapi.com/?s=${query}&apikey=72cd314d`;
  const { error, isPending, data } = useFetch(url);
  let [color, setColor] = useState("#ffffff");
  const override = css`
    border-color: red;
  `;
  // if data with false response back
  if (data) {
    if (data.Response === "False") {
      return (
        <div className="movies-list">
          <h2>{`Result included: ${query}`}</h2>
          <h3 className="centralize button-back" style={{ color: "white" }}>
            {data.Error}
          </h3>
        </div>
      );
    }
  }
  return (
    <div className="">
      {isPending && (
        <div className="centralize">
          <ClipLoader
            color={color}
            loading={isPending}
            css={override}
            size={80}
          />
        </div>
      )}
      {data && (
        <div>
          <Movies
            movies={data.Search}
            whichApi="omdb"
            h2title={`Result included: ${query}`}
          />
        </div>
      )}
    </div>
  );
}
