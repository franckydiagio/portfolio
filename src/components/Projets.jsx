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
  SubTitle2,
} from "../styles/GlobalStyle";
import { easeInOut, motion } from "framer-motion";
import styled from "styled-components";
import portfolio from "../assets/my_portfolio.png";
import { FaLink } from "react-icons/fa";

const Prjt = styled.div`
  padding: ${padding__section};
  font-family: ${font__family};

  @media screen and (max-width: 1050px) {
    padding: ${ps__mobile_1050};
  }

  @media screen and (max-width: 750px) {
    padding: ${ps__mobile_750};
  }

  @media screen and (max-width: 350px) {
    padding: ${ps__mobile_350};
  }

  .projets {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    margin: 1rem 0;
    gap: 2rem;

    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      color: ${color__light};
      font-size: 15px;

      a {
        text-decoration: none;
        color: cyan;
        i {
          color: ${color__light};
        }
      }

      img {
        width: 100%;
      }
    }

    @media screen and (max-width: 850px) {
      flex-direction: column;
      gap: 3rem;
    }
  }
`;

const Projets = () => {
  return (
    <Prjt id="projets">
      <SubTitle>Mes Projets</SubTitle>
      <div className="projets">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SubTitle2>Mon Portfolio Personnel</SubTitle2>
          <br />
          <a
            className="link"
            target="blank"
            href="https://github.com/franckydiagio/portfolio.git"
          >
            <i>Lien site Web: </i>
            <FaLink />
            https://franckydiagio.github.io/portfolio.
          </a>
          <br />
          <a
            className="link"
            target="blank"
            href="https://github.com/franckydiagio/portfolio.git"
          >
            <i>Lien code sur GitHub: </i>
            <FaLink />
            https://github.com/franckydiagio/portfolio.git
          </a>{" "}
          <br />
          <b>Technologie utilisées: </b> React.js (styled-components,
          framer-motion), HTML, CSS. <br />
          <b>Description: </b> ce projet est un site Web personnel développé
          avec React dans le but de présenter mon profil de développeur
          front-end junior. Il regroupe mes compétences, mes projets, ainsi que
          mes informations de contact. L'interface est responsive, animamée avec
          framer-motion, et structurée en plusieurs sections. <br />
          <b>Objectif: </b> Créer un portfolio moderne et interactif pour
          démontrer mes compétences techniquees en React et mes capacités à
          construire une interface utilisateur claire, fuide, responsive et
          efficace.. <br />
          <b>Fonctionnalités principales: </b>
          Navigation dynamique, Animation fuide, Style modulaire et Responsive
          design pour mobile et desktop.
        </motion.div>
        <motion.div>
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            src={portfolio}
            alt=""
          />
        </motion.div>
      </div>
    </Prjt>
  );
};

export default Projets;
