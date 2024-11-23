import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieActors } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const TemplateActorPage = ({ movie, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["actors", { id: movie.id }],
    getMovieActors
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const actors = data.cast 

  return (
    console.log(actors)
  );
};

export default TemplateActorPage;