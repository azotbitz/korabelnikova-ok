import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import houseCard from "../media/houseCard.png";
import CustomButton from "./CustomButton";
import {Link} from "react-router-dom";

const Details = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      gap: theme.spacing(5),
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));


  return <Box sx={{backgroundColor: "#ffffff", py: 7, minHeight: "50vh"}}>
    <Container sx={{marginTop: "5vh"}} component={"div"}>
      <CustomBox>
        <ImgContainer>
          <img src={houseCard} alt="houseCard" style={{maxWidth: "100%", borderRadius: "1rem", filter: "drop-shadow(2px 4px 6px black)"}}/>
        </ImgContainer>

        <Box sx={{width: "90%"}}>
          <Typography sx={{fontSize: "35px", color: "#000", fontWeight: "500", my: 3}}>
            Коротко о нас
          </Typography>

          <Typography sx={{fontSize: "22px", color: "#141a1f", fontWeight: "500", my: 3}}>
           Доверьтесь нашему опыту
          </Typography>

          <Typography sx={{fontSize: "14px", color: "#141a1f", fontWeight: "500", my: 3}}>
            Главная задача нутрициолога заключается в том, чтобы помогать людям получать, анализировать и использовать информацию о здоровом питании для повышения качества жизни и профилактики заболеваний. В своей работе специалист учитывает большое число факторов, касающихся не только питания, но и, например, генетической предрасположенности, образа жизни, физической активности и так далее.
          </Typography>
          <Box sx={{mt: 5}}>
          <Link to={"/contact"} style={{textDecoration: "none"}}><CustomButton backgroundColor="#a5d43e" color="#FFF"
                                                                               buttonText="Узнать больше" getStartedBtn={true}/></Link>
          </Box>
        </Box>
      </CustomBox>
    </Container>
  </Box>;
};

export default Details;
