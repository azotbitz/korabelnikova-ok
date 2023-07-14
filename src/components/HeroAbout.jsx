import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImgAbout from "../media/pupil.png";


const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(3),
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      textAlign: "center",
      gap: theme.spacing(1),
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#141a1f",
    fontWeight: "bold",
    margin: theme.spacing(4,0,4,0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    }
  }));

  return <Box sx={{background: "linear-gradient(90deg, rgba(254,254,254,1) 0%, rgba(219,255,141,0.9710477941176471) 21%, rgba(255,255,255,1) 100%)", minHeight: "100vh"}}>
      <Container component={"div"} maxWidth="lg">
        <Navbar />
          <CustomBox>
            <Box sx={{ flex: "1.25" }}>
              <Title variant="h1">
                  О нас
              </Title>
              <Typography variant="body2" sx={{fontSize: "18px", color: "#141a1f", my: 4}}>
                Лаконично расскажем о нашей деятельности
              </Typography>
            </Box>
            <Box sx={{flex: "1.5"}}>
              <img src={heroImgAbout} alt="heroImg" style={{maxWidth: "100%", marginTop: "1rem", marginBottom: "1rem", boxShadow: "rgba(51, 116, 36, 0.29) 16px 11px 10px 2px", border: "7px solid lavender", borderRadius: "5rem"}}/>
            </Box>
          </CustomBox>
      </Container>
    </Box>
};

export default Hero;
