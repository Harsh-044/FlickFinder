import React from "react";
import { Box, Stack,Button } from "@mui/material";
import {

  BollywoodMovies,
  HollywoodMovies,
  ActionMovies,
} from "../MoviesCollection";

import BollywoodMoviesCard from  '../Component/BollywoodMoviesCard';
import HollywoodMoviesCard from '../Component/HollywoodMoviesCard';
import ActionMoviesCard from '../Component/ActionMoviesCard';

const Home = () => {
  
  return (
    <Box
      sx={{
        ml: { md: "10%", lg: "15%", xl: "15%" },
        mt:".5%",
        width: { lg: "1000px" },
        backgroundColor: "black",
      }}
    >
     
      
      <Button sx={{ml:"1%", mt:"5%",fontSize: "28px", fontWeight: "bold" }}>
        Bollywood Movies
      </Button>
      <Stack className="scrollbar" direction="row" spacing={2} sx={{ overflowX: "scroll",ml:"1%" }}>
        {Object.keys(BollywoodMovies).map((item) => (
          <BollywoodMoviesCard item={item} />
        ))}
      </Stack>
      <Button sx={{ml:"1%",mt:"5%", fontSize: "28px", fontWeight: "bold" }}>
        Hollywood Movies
      </Button>
      <Stack className="scrollbar" direction="row" spacing={2} sx={{ overflowX: "scroll",ml:"1%" }}>
        {Object.keys(HollywoodMovies).map((item) => (
          <HollywoodMoviesCard item={item} />
        ))}
      </Stack>
      <Button sx={{ml:"1%",mt:"5%", fontSize: "28px", fontWeight: "bold" }}>
        Action Movies
      </Button>
      <Stack className="scrollbar" direction="row" spacing={2} sx={{ overflowX: "scroll",ml:"1%" }}>
        {Object.keys(ActionMovies).map((item) => (
          <ActionMoviesCard item={item} />
        ))}
      </Stack>
    </Box>
  );
};

export default Home;
