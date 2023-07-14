import { Box, styled, Typography } from "@mui/material";
import React from "react";


const House = ({ img, price, address, bedrooms, bathrooms, space }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    maxWidth: 110,
    height: "200px",
    backgroundColor: "#ffffff",
    borderRadius: "1rem",
    margin: theme.spacing(0,2,0,2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2,0,2,0),
    },
  }));

  const ImgContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    width: "110px",
    boxShadow: "-6px 11px 17px 5px rgba(158, 169, 155, 0.39)",
    borderRadius: "2rem",
  }));

  return <HouseBox>
    <ImgContainer>
      <img src={img} alt="housePhoto" style={{width: "100px", height: "100px", maxWidth: "100%", borderRadius: "1rem"}} />
    </ImgContainer>

    <Box sx={{padding: "0.5rem", display: "flex", justifyContent: "center"}}>
      <Typography variant="body2" sx={{my: 2, color: "#141a1f"}}>
          {address} вид
      </Typography>
    </Box>

  </HouseBox>;
};

export default House;
