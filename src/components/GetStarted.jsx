import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import veg1 from "../media/veg1.png";
import veg2 from "../media/veg2.png";
import veg3 from "../media/veg3.png";
import veg4 from "../media/veg4.png";
import veg5 from "../media/veg6.png";
import veg6 from "../media/veg5.png";
import veg7 from "../media/veg7.png";
import veg8 from "../media/veg8.png";
import CustomButton from "./CustomButton";
import {Link} from "react-router-dom";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    background: "linear-gradient(90deg, rgba(254,254,254,1) 0%, rgba(219,255,141,0.9710477941176471) 21%, rgba(255,255,255,1) 100%)",
    display: "flex",
    height: "416px",
    borderRadius: "15px",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3,3,0,3),
      marginTop: "1rem",
      marginBottom: "1rem",
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({

    padding: theme.spacing(10,0,10,0),
    margin: theme.spacing(0,2,0,2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
      marginBottom: theme.spacing(2),
    },
  }));

  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing(1),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
      marginBottom: theme.spacing(0),
    },
  }));

  const HouseBox = styled(Box)(({ theme }) => ({
    height: "185px",
    backgroundColor: "#ffffff",
    borderRadius: "1rem",
    margin: theme.spacing(6),
    flex: "1 0 16%",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2,2,0,2),
    },
  }));

  const ImgContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    boxShadow: "-6px 11px 17px 5px rgba(158, 169, 155, 0.39)",
    borderRadius: "2rem",
    border: "7px solid #a5d43f",
  }));

  return <CustomBox>
    <Container component={"div"} maxWidth="lg">
    <Box sx={{textAlign: "center"}}>
      <Typography sx={{fontSize: "35px", color: "#000", fontWeight: "500", my: 3}}>
        Самые полезные продукты
      </Typography>

      <Typography sx={{fontSize: "22px", color: "#141a1f", fontWeight: "500", my: 3}}>
        Мы подобрали самые полезные на наш взгляд овощи и фрукты
      </Typography>
    </Box>

        <PropertiesBox>
          <HouseBox>
            <ImgContainer>
            <img src={veg1} alt="housePhoto" style={{width: "170px", height: "170px", maxWidth: "100%", borderRadius: "1rem"}} />
          </ImgContainer>

            <Box sx={{padding: "0.5rem", display: "block", textAlign: "center"}}>
              <Typography sx={{my: 1, fontWeight: "700", color: "#141a1f"}}>
                Помидор
              </Typography>
              <Typography sx={{my: 1, fontWeight: "500", color: "#a6d43f"}}>
                300₽
              </Typography>
            </Box>

          </HouseBox>

          <HouseBox>
            <ImgContainer>
              <img src={veg2} alt="housePhoto" style={{width: "170px", height: "170px", maxWidth: "100%", borderRadius: "1rem"}} />
            </ImgContainer>

            <Box sx={{padding: "0.5rem", display: "block", textAlign: "center"}}>
              <Typography sx={{my: 1, fontWeight: "700", color: "#141a1f"}}>
                Перец
              </Typography>
              <Typography sx={{my: 1, fontWeight: "500", color: "#a6d43f"}}>
                400₽
              </Typography>
            </Box>

          </HouseBox>

          <HouseBox>
            <ImgContainer>
              <img src={veg3} alt="housePhoto" style={{width: "170px", height: "170px", maxWidth: "100%", borderRadius: "1rem"}} />
            </ImgContainer>

            <Box sx={{padding: "0.5rem", display: "block", textAlign: "center"}}>
              <Typography sx={{my: 1, fontWeight: "700", color: "#141a1f"}}>
                Сельдерей
              </Typography>
              <Typography sx={{my: 1, fontWeight: "500", color: "#a6d43f"}}>
                500₽
              </Typography>
            </Box>

          </HouseBox>

          <HouseBox>
            <ImgContainer>
              <img src={veg4} alt="housePhoto" style={{width: "170px", height: "170px", maxWidth: "100%", borderRadius: "1rem"}} />
            </ImgContainer>

            <Box sx={{padding: "0.5rem", display: "block", textAlign: "center"}}>
              <Typography sx={{my: 1, fontWeight: "700", color: "#141a1f"}}>
                Банан
              </Typography>
              <Typography sx={{my: 1, fontWeight: "500", color: "#a6d43f"}}>
                100₽
              </Typography>
            </Box>

          </HouseBox>

      <HouseBox>
        <ImgContainer>
          <img src={veg5} alt="housePhoto" style={{width: "170px", height: "170px", maxWidth: "100%", borderRadius: "1rem"}} />
        </ImgContainer>

        <Box sx={{padding: "0.5rem", display: "block", textAlign: "center"}}>
          <Typography sx={{my: 1, fontWeight: "700", color: "#141a1f"}}>
            Морковь
          </Typography>
          <Typography sx={{my: 1, fontWeight: "500", color: "#a6d43f"}}>
            50₽
          </Typography>
        </Box>

      </HouseBox>

      <HouseBox>
        <ImgContainer>
          <img src={veg6} alt="housePhoto" style={{width: "170px", height: "170px", maxWidth: "100%", borderRadius: "1rem"}} />
        </ImgContainer>

        <Box sx={{padding: "0.5rem", display: "block", textAlign: "center"}}>
          <Typography sx={{my: 1, fontWeight: "700", color: "#141a1f"}}>
            Клубника
          </Typography>
          <Typography sx={{my: 1, fontWeight: "500", color: "#a6d43f"}}>
            500₽
          </Typography>
        </Box>

      </HouseBox>

      <HouseBox>
        <ImgContainer>
          <img src={veg7} alt="housePhoto" style={{width: "170px", height: "170px", maxWidth: "100%", borderRadius: "1rem"}} />
        </ImgContainer>

        <Box sx={{padding: "0.5rem", display: "block", textAlign: "center"}}>
          <Typography sx={{my: 1, fontWeight: "700", color: "#141a1f"}}>
            Лук
          </Typography>
          <Typography sx={{my: 1, fontWeight: "500", color: "#a6d43f"}}>
            50₽
          </Typography>
        </Box>

      </HouseBox>

      <HouseBox>
        <ImgContainer>
          <img src={veg8} alt="housePhoto" style={{width: "170px", height: "170px", maxWidth: "100%", borderRadius: "1rem"}} />
        </ImgContainer>

        <Box sx={{padding: "0.5rem", display: "block", textAlign: "center"}}>
          <Typography sx={{my: 1, fontWeight: "700", color: "#141a1f"}}>
            Апельсин
          </Typography>
          <Typography sx={{my: 1, fontWeight: "500", color: "#a6d43f"}}>
            450₽
          </Typography>
        </Box>

      </HouseBox>
    </PropertiesBox>

        <Link to={"/contact"} style={{display: "flex", justifyContent: "center", textDecoration: "none"}}><CustomButton backgroundColor="#a6d43f" color="#fff" buttonText="Узнать больше" getStartedBtn={true}/></Link>
    </Container>
  </CustomBox>;
};

export default GetStarted;
