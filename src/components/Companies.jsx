import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import logosImg from "../media/telegram-logo.png";
import logosImg2 from "../media/whatsapp.png";
import logosImg3 from "../media/viber.png";

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    paddingTop: "3rem",
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    }
  }));

  const CustomContainer2 = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(6),
    gap: "7rem",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(5),
      gap: "4rem",
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    }
  }));

  return <Box style={{backgroundColor: "#151a1b", paddingLeft: "1rem", paddingRight: "1rem", overflowY: "hidden"}}>
    <CustomContainer>
      <CustomBox>
        <Typography sx={{fontSize: "35px", fontWeight: "500", color: "#fff"}}>
          Получите индивидуальную консультацию в любом популярном мессенджере
        </Typography>
      </CustomBox>
      <CustomContainer2>
        <img style={{width: "40%", height: "40%", cursor: "pointer"}} src={logosImg} alt="telegram"/>
        <img style={{width: "40%", height: "40%", cursor: "pointer"}} src={logosImg2} alt="whatsapp"/>
        <img style={{width: "40%", height: "40%", cursor: "pointer"}} src={logosImg3} alt="viber"/>
      </CustomContainer2>
    </CustomContainer>
  </Box>;
};

export default Companies;
