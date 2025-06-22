import React from "react";
import { GlobalStyle, color__gold } from "./styles/GlobalStyle";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Skills />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
