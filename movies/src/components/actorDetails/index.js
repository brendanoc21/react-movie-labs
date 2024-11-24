import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  // Don't miss this!
    const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Date of Birth: {actor.birthday}
      </Typography>

      <Typography variant="h5" component="h3">
        Place of Birth: {actor.place_of_birth}
      </Typography>
      <br></br>
      <Typography variant="h5" component="h3">
        Biography:
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>
      <br></br>
      <Typography variant="h5" component="h3">
        Popularity: {actor.popularity}
      </Typography>
    </>
  );
};
export default ActorDetails ;