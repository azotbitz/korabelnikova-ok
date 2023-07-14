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

  return <Box sx={{backgroundColor: "#fff", py: 10, minHeight: "80vh"}}>
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
          <div>
            <TextField
                sx={{m: 1, width: '20rem'}}
                id="fullName"
                label="ФИО"
                multiline
                placeholder="Иванов Иван Иванович"
            />
            <TextField
                sx={{m: 1, width: '20rem'}}
                id="email"
                label="Email"
                placeholder="some@mail.ru"
                multiline
            />
          </div>
          <div>
            <TextField
                sx={{m: 1, width: "41rem"}}
                id="message"
                label="Сообщение"
                multiline
                rows={4}
                fullWidth
                defaultValue="Здравствуйте! Я хочу получить консультацию!"
            />
          </div>
          <Button sx={{
            margin: "1rem",
            backgroundColor: "#a6d43f", color: "#fff", fontWeight: "700",
            fontSize: "14px",
            cursor: "pointer",
            padding: "0.5rem 1.25rem",
            borderRadius: "25px",
            textTransform: "none",
            display: "block",
            border: "2px solid transparent", ":hover": {
            backgroundColor: "#fff", color: "#a6d43f", borderColor: "#a6d43f",
            }}} type="submit" form="form1" value="Submit">
            Отправить
          </Button>
        </Box>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </PropertiesBox>
    </Container>
  </Box>;
};

export default Properties;
