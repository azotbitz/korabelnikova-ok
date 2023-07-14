import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";

const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(18),
    paddingRight: theme.spacing(18),
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    textAlign: "center",
    paddingLeft: theme.spacing(25),
    paddingRight: theme.spacing(25),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return <Box sx={{backgroundColor: "#fff", py: 10, minHeight: "50vh"}}>
    <Container>
      <PropertiesTextBox>
        <Typography sx={{fontSize: "35px", fontWeight: "500", color: "#000000"}}>
          Категории деятельности
        </Typography>
        <Typography sx={{fontSize: "16px", mt: 1, color: "#141a1f"}}>
          Нутрициологи консультируют людей по поводу изменения пищевых привычек, составления наиболее оптимального рациона, режима питания, расхода энергии организма, употребления биологически активных пищевых добавок.
        </Typography>
      </PropertiesTextBox>

      <PropertiesBox>
        {properties.map((property) => (
          <House
              key={property.id}
              img={property.img}
              price={property.price}
              address={property.address}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              space={property.space}/>
        ))}
      </PropertiesBox>
    </Container>
  </Box>;
};

export default Properties;
