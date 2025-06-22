import React from "react";
import styled from "styled-components";
import {
  color__light,
  font__family,
  fw__medium,
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
  font-family: ${font__family};
  font-weight: ${fw__medium};
  color: ${color__light};

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
      My portfolio | Francky Diagio -- Copyrigth &copy; -- all rights reserved.
    </Ftr>
  );
};

export default Footer;
