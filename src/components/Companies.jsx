import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import logosImg from "../media/telegram-logo.png";
import logosImg2 from "../media/whatsapp.png";
import logosImg3 from "../media/viber.png";

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(1)
    }
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(1)
    }
  }));

  return <Box style={{backgroundColor: "#151a1b",  paddingTop: "3rem"}}>
    <CustomContainer>
      <CustomBox>
        <Typography sx={{fontSize: "35px", fontWeight: "500", color: "#fff"}}>
          Получите индивидуальную консультацию в любом популярном мессенджере
        </Typography>
      </CustomBox>
      <Container sx={{display: "flex", justifyContent: "center", mt: 6, gap: "7rem"}}>
        <img style={{width: "40%", height: "40%", cursor: "pointer"}} src={logosImg} alt="telegram"/>
        <img style={{width: "40%", height: "40%", cursor: "pointer"}} src={logosImg2} alt="whatsapp"/>
        <img style={{width: "40%", height: "40%", cursor: "pointer"}} src={logosImg3} alt="viber"/>
      </Container>
    </CustomContainer>


  </Box>;
};

export default Companies;
