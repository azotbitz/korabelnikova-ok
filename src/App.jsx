import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom";
import { YMaps } from "react-yandex-maps";
import React from "react";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: "Fira Sans Condensed, sans-serif",
        fontWeight: "600",
      },
      body1: {
        fontFamily: "Inter, sans-serif",
        fontSize: "16px",
        fontWeight: "700",
      },
      body2: {
        fontFamily: "Inter, sans-serif",
        fontSize: "18px",
      },
      body3: {
        fontFamily: "Inter, sans-serif",
        fontSize: "16px",
        fontWeight: "500",
        textTransform: "none"
      },
    },
  });

  return <YMaps>
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<HomePage/>}/>
        <Route path={'/news'} element={<NewsPage/>}/>
        <Route path={'/about'} element={<AboutPage/>}/>
        <Route path={'/contact'} element={<ContactPage/>}/>
      </Route>
      <Route path={'*'} element={<ErrorPage/>}/>
    </Routes>
  </ThemeProvider>
  </YMaps>;
}

export default App;
