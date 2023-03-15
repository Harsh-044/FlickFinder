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
import { BollywoodMovies } from "../MoviesCollection";
const BollywoodMoviesCard = ({ item }) => {
    const navigate=useNavigate()
  return (
    <Card onClick={()=>{
      document.cookie=`movie=BollywoodMovies`
      document.cookie=`movieName=${BollywoodMovies[item].name}`        
        navigate(`/:${BollywoodMovies[item].name}`)}}sx={{backgroundColor:"rgb(22,24,29)",cursor:"pointer", minWidth:"200px",maxWidth:"200px",minHeight:"470px" ,maxHeight:"480px" }}>
      <CardMedia
        component="img"
        src={BollywoodMovies[item].image}
      />
      <CardContent sx={{textAlign:"center"}}>{BollywoodMovies[item].name}</CardContent>
     <CardContent sx={{display:"flex",justifyContent:"center"}} > <Button variant="outlined">Watch List</Button></CardContent>
      <Typography sx={{display:"flex",justifyContent:"center"}}><Button>
        <PlayArrowIcon />
        Watch Trailer
      </Button></Typography>
    </Card>
  );
};

export default BollywoodMoviesCard;
