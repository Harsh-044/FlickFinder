import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import {
  BollywoodMovies,
  HollywoodMovies,
  ActionMovies,itemData
} from "../MoviesCollection";
import Cookies from "js-cookie";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Movie = () => {
  const movie = useRef(" ");
  const movieName = useRef(" ");
  const [option, setOption] = useState(true);
  useEffect(() => {
    movie.current = Cookies.get("movie");
    movieName.current = Cookies.get("movieName");
    switch (movie.current) {
      case "BollywoodMovies":
        movie.current = BollywoodMovies;

        break;
      case "HollywoodMovies":
        movie.current = HollywoodMovies;

        break;
      case "ActionMovies":
        movie.current = ActionMovies;

        break;
    }
    //  console.log(movie.current[movieName.current])
    movie.current = movie.current[movieName.current];
    setOption(false);
    console.log(movie.current.type)
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#1F1F1F",
      }}
    >
      <Box
        sx={{
          ml: { sm: "5%", md: "7%", lg: "6%", xl: "5%" },
          width: { lg: "1000px" },
          backgroundColor: "#1F1F1F",
        }}
      >
        <Typography sx={{ fontSize: "50px", color: "white" }}>
          {movie.current.name}
        </Typography>
        <Stack direction="row" spacing={4}>
          <Typography
            sx={{ fontSize: "14px", color: "grey", display: "inline-block" }}
          >
            {movie.current.year}
          </Typography>
          <Typography
            sx={{ fontSize: "14px", color: "grey", display: "inline-block" }}
          >
            {movie.current.Time}
          </Typography>
        </Stack>

        <Box className="scrollbar" sx={{  height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
      </Box>
    </Box>
  );
};

export default Movie;
