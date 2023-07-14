import { Box, styled, Typography } from "@mui/material";
import React from "react";

import buyIcon from "../media/buy_icon.png";
import sellIcon from "../media/sell_icon.png";
import rentIcon from "../media/rent_icon.png";

import CustomButton from "./CustomButton";
import {Link} from "react-router-dom";
import {Title} from "@mui/icons-material";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
      marginTop: theme.spacing(2)
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {

    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginBottom: "0",
      width: "0%",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "33%",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2,0,2,0),
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

  return <Box sx={{
    backgroundColor: "#c6f167",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    pt: 10,
    pb: 10,
    alignItems: "center"}}>
    <Typography sx={{
      fontSize: "35px",
      textAlign: "center",
      fontWeight: "500",
      color: "#000",
      my: 3}}>
      Как это работает?
    </Typography>

    <CustomBox>
      <Typography variant="body2" sx={{
        fontSize: "16px",
        fontWeight: "500",
        color: "#141a1f",
        textAlign: "center",
      }}>
        Мы знаем всё о питании благодоря большому опыту
      </Typography>
    </CustomBox>

    <GuidesBox>
      <GuideBox>
        <Title variant="h1">1990</Title>
        <Typography variant="body2" sx={{
          fontWeight: "500",
          color: "#141a1f",
          fontSize: "20px",
          textAlign: "center",
          my: 1,
        }}>
          Год начала работы
        </Typography>
      </GuideBox>

      <GuideBox>
        <Title variant="h1">+50</Title>
        <Typography variant="body2" sx={{
          fontWeight: "500",
          color: "#141a1f",
          fontSize: "20px",
          textAlign: "center",
          my: 1,
        }}>
          Новых диет
        </Typography>
      </GuideBox>

      <GuideBox>
        <Title variant="h1">+200</Title>
        <Typography variant="body2" sx={{
          fontWeight: "500",
          color: "#141a1f",
          fontSize: "20px",
          textAlign: "center",
          my: 1,
        }}>
          Счастливых клиентов
        </Typography>
      </GuideBox>

      <GuideBox>
        <Title variant="h1">+1k</Title>
        <Typography variant="body2" sx={{
          fontWeight: "500",
          color: "#141a1f",
          fontSize: "20px",
          textAlign: "center",
          my: 1,
        }}>
          Одобренных продуктов
        </Typography>
      </GuideBox>
    </GuidesBox>

  </Box>;
};

export default Guide;
