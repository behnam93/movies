import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Components/UseFetch";
import Movie from "./Movie";
import "./MoviePage.css";

export default function MoviePage() {
  const params = useParams();
  const url = `http://www.omdbapi.com/?i=${params.slug}&apikey=72cd314d`;
  const { data, isPending, error } = useFetch(url);
  console.log(data);
  return <div className="mt-4">{data && <Movie data={data} />}</div>;
}
