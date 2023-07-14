import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import houseCard from "../media/biography.png";

const Details = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "bold",
    fontFamily: "Fira Sans Condensed, sans-serif",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    color: "#141a1f",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(5),
    padding: theme.spacing(7,5,0,5),
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
      marginTop: theme.spacing(1),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    marginTop: theme.spacing(3),
    width: "13%",
    height: "5px",
    backgroundColor: "#000",
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
      marginLeft: "auto",
    },
  }));

  return <Box sx={{backgroundColor: "#ffffff", py: 5, minHeight: "100vh"}}>
    <Container sx={{marginTop: "5vh"}} component={"div"}>
      <CustomBox>
        <ImgContainer>
          <img src={houseCard} alt="houseCard" style={{maxWidth: "100%", borderRadius: "1rem", filter: "drop-shadow(2px 4px 6px black)"}}/>
        </ImgContainer>

        <Box sx={{width: "100%"}}>

          <Typography sx={{fontSize: "35px", color: "#000", fontWeight: "500", my: 3}}>
            Биография
          </Typography>

          <Typography sx={{fontSize: "16px", color: "#141a1f"}}>
            Гиппократ (ок.460 г. до н.э.- ок.370 г.до н.э.) – великий древнегреческий врач и философ, вошедший в историю как “отец медицины”. Его медицинские трактаты оказали огромное влияние на медицинскую науку и практику.
            Гиппократ родился ок.460 г. до н.э., на острове Кос. Его отец был потомственным врачом-асклепиадом. Он и привил сыну любовь к медицине, став его первым учителем. Позже Гиппократ обучался у философов Демокрита и Горгия.
          </Typography>

          <Divider />

          <Typography sx={{fontSize: "35px", color: "#000", fontWeight: "500", my: 3}}>
            Достижения
          </Typography>

          <Typography sx={{fontSize: "16px", color: "#141a1f"}}>
            Одним из главных достижений Гиппократа было выделений нескольких человеческих темпераментов. По его мнению, поведение человека зависит от слизи, черной желчи, желчи и крови.
            Именно благодаря Гиппократу в медицине появилось понятие стадийности. Патология рассматривалась им как постоянно прогрессирующее явление. Опаснейшим этапом развития болезни, по мнению Гиппократа, был “кризис”, когда человек либо погибал, либо шел на поправку.
            Еще одним достижением легендарного врача было новое описание способов обследования пациентов. Уже во время жизни Гиппократа медики использовали примитивную пальпацию, аускультацию и перкуссию.
            Гиппократ был самым выдающимся хирургом древности. Он использовал принципиально иные способы в лечении ран, фистул, вывихов и переломов. Также он выписал правила поведения хирурга во время оперативного вмешательства. Особое внимание уделялось освещению, положению рук и расположению инструментария.
          </Typography>
        </Box>
      </CustomBox>

      <TextFlexbox>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <LargeText>20+</LargeText>
          <SmallText>Лет Опыта</SmallText>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <LargeText>50+</LargeText>
          <SmallText>Довольных Пациентов</SmallText>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <LargeText>100+</LargeText>
          <SmallText>Проданных Диет</SmallText>
        </Box>

      </TextFlexbox>
    </Container>
  </Box>;
};

export default Details;
