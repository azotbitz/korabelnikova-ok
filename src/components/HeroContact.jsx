import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";


const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(15),
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: theme.spacing(3),
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

  const ContactLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7a7a7e",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#141a1f"
    },
  }));

  return <Box sx={{background: "linear-gradient(90deg, rgba(254,254,254,1) 0%, rgba(219,255,141,0.9710477941176471) 21%, rgba(255,255,255,1) 100%)", minHeight: "100vh"}}>
      <Container component={"div"} maxWidth="lg">
        <Navbar />
          <CustomBox>
            <Box sx={{ flex: "1.25" }}>
              <Title variant="h1">
                  Контакты
              </Title>
            </Box>
          </CustomBox>
        <CustomBox>
        <Box sx={{flex: "1.5"}}>
          <Typography sx={{ fontSize: "35px", color: "#000", fontWeight: "500", textAlign: "center"}}>
            Вы можете воспользоваться любым удобным для Вас способом связи
          </Typography>
        </Box>
        </CustomBox>
        <CustomBox>
          <Box sx={{flex: "1.5"}}>
            <Typography variant="body1" sx={{ fontSize: "24px", color: "#141a1f", fontWeight: "500", mt: 5, mb: 4}}>
              Телефон
            </Typography>
            <a style={{color: "#969187", textDecoration: "none"}} href="tel:+7-964-779-6262"><ContactLink>+7-964-779-6262</ContactLink></a>
          </Box>
          <Box sx={{flex: "1.5"}}>
            <Typography variant="body1" sx={{ fontSize: "24px", color: "#141a1f", fontWeight: "500", mt: 5, mb: 4}}>
              E-mail
            </Typography>
            <a style={{color: "#969187", textDecoration: "none"}} href="mailto: ok_sana_korabelnikova@mail.ru"><ContactLink>ok_sana_korabelnikova@mail.ru</ContactLink></a>
          </Box>
          <Box sx={{flex: "1.5"}}>
            <Typography variant="body1" sx={{ fontSize: "24px", color: "#141a1f", fontWeight: "500", mt: 5, mb: 4}}>
              Telegram
            </Typography>
            <a style={{color: "#969187", textDecoration: "none"}} href="https://t.me/OKsana_korabelnikova"><ContactLink>@OKsana_korabelnikova</ContactLink></a>
          </Box>
          <Box sx={{flex: "1.5"}}>
            <Typography variant="body1" sx={{ fontSize: "24px", color: "#141a1f", fontWeight: "500", mt: 5, mb: 4}}>
              WhatsApp
            </Typography>
            <a style={{color: "#969187", textDecoration: "none"}} href="https://wa.me/9167796262"><ContactLink>+7-916-779-6262</ContactLink></a>
          </Box>
        </CustomBox>
      </Container>
    </Box>
};

export default Hero;
