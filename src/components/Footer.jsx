import React from "react";
import styled from "styled-components";
import {
  padding__section,
  ps__mobile_1050,
  ps__mobile_350,
  ps__mobile_750,
} from "../styles/GlobalStyle";

const Ftr = styled.div`
  text-align: center;
  padding: ${padding__section};
  opacity: 0.8;
  padding: 1rem 0;
  color: lightgrey;
  font-size: 15px;
  font-family: "Inter";

  @media screen and (max-width: 1050px) {
    padding: ${ps__mobile_1050};
  }

  @media screen and (max-width: 750px) {
    padding: ${ps__mobile_750};
  }

  @media screen and (max-width: 350px) {
    padding: ${ps__mobile_350};
  }
`;

const Footer = () => {
  return (
    <Ftr>
      My portfolio | Francky Diagio -- Copyrigth 2025 &copy; -- Tout droits
      réservé.
    </Ftr>
  );
};

export default Footer;
