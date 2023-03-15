import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { HollywoodMovies } from "../MoviesCollection";
const HollywoodMoviesCard = ({ item }) => {
    const navigate=useNavigate()
  return (
    <Card onClick={()=>{
      document.cookie=`movie=HollywoodMovies` 
      document.cookie=`movieName=${HollywoodMovies[item].name}`      
        navigate(`/:${HollywoodMovies[item].name}`)}}sx={{backgroundColor:"rgb(22,24,29)",cursor:"pointer", minWidth:"200px",maxWidth:"200px",minHeight:"470px" ,maxHeight:"480px" }}>
      <CardMedia
        component="img"
        src={HollywoodMovies[item].image}
      />
      <CardContent sx={{textAlign:"center"}}>{HollywoodMovies[item].name}</CardContent>
     <CardContent sx={{display:"flex",justifyContent:"center"}} > <Button variant="outlined">Watch List</Button></CardContent>
      <Typography sx={{display:"flex",justifyContent:"center"}}><Button>
        <PlayArrowIcon />
        Watch Trailer
      </Button></Typography>
    </Card>
  );
};

export default HollywoodMoviesCard;
