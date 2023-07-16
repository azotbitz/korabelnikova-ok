import {Box, Button, Container, styled, TextField, Typography} from "@mui/material";
import React from "react";
import { Map } from "react-yandex-maps";


const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: theme.spacing(4),
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      display: "flex",
      gap: theme.spacing(2),
      padding: theme.spacing(1,0,1,0),
    },
  }));
  const CustomBox2 = styled(Box)(({ theme }) => ({
      width: "39rem",
      marginLeft: "0.5rem",
      marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
      width: "19rem",
      flexDirection: "column",
      alignItems: "center",
      display: "flex",
      marginLeft: "0.5rem",
    },
  }));

  return <Box sx={{backgroundColor: "#fff", py: 10, minHeight: "80vh", overflowY: "hidden"}}>
    <Container>
      <PropertiesTextBox>
        <Typography sx={{fontSize: "35px", fontWeight: "500", color: "#000000"}}>
          Будьте на связи
        </Typography>
      </PropertiesTextBox>
      <PropertiesBox>
        <Box
            component="form"
            noValidate
            autoComplete="off"
            id="form1"
        >
          <CustomBox>
            <TextField
                sx={{m: 1, width: '19rem'}}
                id="fullName"
                label="ФИО"
                multiline
                placeholder="Иванов Иван Иванович"
            />
            <TextField
                sx={{m: 1, width: '19rem'}}
                id="email"
                label="Email"
                placeholder="some@mail.ru"
                multiline
            />
          </CustomBox>
          <CustomBox2>
            <TextField
                id="message"
                label="Сообщение"
                multiline
                rows={4}
                fullWidth
                defaultValue="Здравствуйте! Я хочу получить консультацию!"
            />
          </CustomBox2>
          <CustomBox>
          <Button sx={{
            margin: "1rem",
            backgroundColor: "#a6d43f",
            color: "#fff",
            fontWeight: "700",
            fontSize: "14px",
            cursor: "pointer",
            padding: "0.5rem 1.25rem",
            borderRadius: "25px",
            textTransform: "none",
            display: "block",
            border: "2px solid transparent",
            ":hover": {
              backgroundColor: "#fff",
              color: "#a6d43f",
              borderColor: "#a6d43f",
            }}} type="submit" form="form1" value="Submit">
            Отправить
          </Button>
          </CustomBox>
        </Box>

        <Map width="300px" defaultState={{ center: [55.75, 37.57], zoom: 9 }} />

      </PropertiesBox>
    </Container>
  </Box>;
};

export default Properties;
