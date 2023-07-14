import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import news from "../media/news.png"
import {MultiActionAreaCard} from "./MultiActionAreaCard";

const Hero = () => {
  const CustomBoxGeneral = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(50),
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      textAlign: "center",
      gap: theme.spacing(1),
      marginTop: theme.spacing(0)
    },
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(3),
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
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

  const TitleSecond = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#5d5855",
    fontWeight: "bold",
    margin: theme.spacing(1,0,4,0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    }
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    textAlign: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  }));

  return <Box sx={{background: "linear-gradient(90deg, rgba(254,254,254,1) 0%, rgba(219,255,141,0.9710477941176471) 21%, rgba(255,255,255,1) 100%)", minHeight: "100vh"}}>
      <Container component={"div"} maxWidth="lg">
        <Navbar />
          <CustomBoxGeneral>
            <Box sx={{ flex: "1" }}>
              <Title variant="h1">
                  Новости
              </Title>
            </Box>
            <Box sx={{flex: "0.5"}}>
              <img style={{width: "50%"}} src={news} alt="news"/>
            </Box>
          </CustomBoxGeneral>

        <PropertiesTextBox>
          <Typography sx={{fontSize: "35px", fontWeight: "500", color: "#000000"}}>
            Самые последние новости из мира натуротерапии
          </Typography>
        </PropertiesTextBox>
        <CustomBox>



          <MultiActionAreaCard/>


        </CustomBox>

      </Container>
    </Box>
};

export default Hero;
