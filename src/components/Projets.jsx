import React from "react";
import {
  color__dark,
  color__gold,
  color__light,
  font__family,
  fw__medium,
  padding__section,
  ps__mobile_1050,
  ps__mobile_350,
  ps__mobile_750,
  SubTitle,
} from "../styles/GlobalStyle";
import { easeInOut, motion } from "framer-motion";
import styled from "styled-components";
import portfolio from "../assets/my_portfolio.png";

const Prjt = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  padding: ${padding__section};
  font-family: ${font__family};
  p {
    text-align: start;
    color: ${color__light};

    @media screen and (max-width: 550px) {
      text-align: center;
    }
  }

  .projets {
    display: flex;
    align-items: center;
    justify-content: space-between:
    flex-direction: row;
    margin: 1rem 0;
    gap: 3rem;
    
    p {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
      text-align: center;
      @media screen and (max-width: 555px) {
        align-items: center;
        justify-content: center;
      }
      
    span {
      color: ${color__gold};
      font-weight: ${fw__medium};

    }
    }

    img {
      width: 30%;
      margin: 0;
      box-shadow: 0 0 15px ${color__dark};
    }

    .link {
      color: cyan;
      font-weight: ${fw__medium};
    }

    @media screen and (max-width: 555px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      
      p {
      text-align: center;
      }

      img {
    width: 100%;      
      }
    }
  }

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

const Projets = () => {
  return (
    <Prjt id="projets">
      <SubTitle>Mes Projets</SubTitle>
      <div className="projets">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          src={portfolio}
          alt=""
        />
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span>My Portfolio</span>
          Mon site web portfolio. Représente mon capacité en tant que
          développeur Web, et illusté par mes compétences et connaissances dans
          la matière. Lien:{" "}
          <a
            className="link"
            target="blank"
            href="https://github.com/franckydiagio/portfolio.git"
          >
            https://github.com/franckydiagio/portfolio.git
          </a>
        </motion.p>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, visualDuration: easeInOut }}
      >
        Aucune projets d'entreprise réalisés pour le moment. Mais je croix que
        mes compétences et connaissances sont largements suffisants pour y
        contribuer.
      </motion.p>
    </Prjt>
  );
};

export default Projets;
