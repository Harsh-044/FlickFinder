import {
  Drawer,
  Box,
  TextField,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="row" sx={{ backgroundColor: "black", height: "70px" }}>
      <Button sx={{ ml: "4%" }}>
        <MenuIcon />
      </Button>
      <Button
        color="primary"
        sx={{ fontWeight: "bold", fontSize: "20px" }}
        onClick={() => {
          navigate("/");
        }}
      >
        flick
        <SearchIcon sx={{ fontSize: "10px" }} />
      </Button>
      <TextField
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        placeholder="Search a Song"
        variant="standard"
        sx={{
          mt: { xs: "4.3%", sm: "2.1%", md: "1.3%", lg: "1.3%", xl: "1%" },
          ml: "10px",
          width: {
            xs: "200px",
            sm: "350px",
            md: "500px",
            lg: "600px",
            xl: "700px",
          },
          backgroundColor: "white",
          height: "30px",
        }}
      />
    </Stack>
  );
};

export default Navbar;
