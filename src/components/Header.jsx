import React from "react";
import {
  color__dark,
  color__gold,
  color__light,
  color__teal,
  font__family,
  fw__bold,
  fw__medium,
  padding__section,
  ps__mobile_1050,
  ps__mobile_350,
  ps__mobile_750,
  SubTitle,
} from "../styles/GlobalStyle";
import profil from "../assets/profil.png";
import styled from "styled-components";
import { easeIn, easeInOut, motion } from "framer-motion";

const media850 = `
  @media screen and (max-width: 850px) {
    max-width: 100%;
  }
`;

const Head = styled.header`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 3rem;

  font-family: ${font__family};
  padding: ${padding__section};

  @media screen and (max-width: 1050px) {
    padding: ${ps__mobile_1050};
  }

  @media screen and (max-width: 1000px) {
    padding: ${ps__mobile_1050};
    flex-direction: column;
  }

  @media screen and (max-width: 750px) {
    padding: ${ps__mobile_750};
  }

  @media screen and (max-width: 350px) {
    padding: ${ps__mobile_350};

    h1 {
      font-size: 30px;
      color: ${color__gold};
    }

    h3 {
      font-size: 20px;
    }
  }
`;

const Section1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  h1 {
    font-family: "Great Vibes";
    font-weight: ${fw__bold};
    letter-spacing: 2px;
    font-size: 50px;
    color: ${color__gold};
    background: linear-gradient(90deg, yellow, orangered, purple, teal);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    color: ${color__light};
    background: ${color__teal};
    padding: 0.7rem 1rem;
    margin: 1rem 0;
    border-radius: 3px;
  }

  p {
    color: ${color__light};
    text-align: start;
  }

  @media screen and (max-width: 375px) {
    padding: ${ps__mobile_350};

    h1 {
      font-size: 35px;
      color: ${color__gold};
    }

    h3 {
      font-size: 16px;
    }
  }
`;
const Section2 = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  img {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <Head id="home">
      <Section1>
        <SubTitle>Mon profil</SubTitle>
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Francky Diagio
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Développeur Front-end Junior avec React JavaScript
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <b>Diplômé de Licence en Informatique et programmation</b>. Je suis un
          développeur frony-end junior passionné. spécialisé dans le
          développement d'interface moderne avec <b>React.js</b>.
          <br />
          Je maîtrise l'écosystème react, notament{" "}
          <b>react-router-dom, styled-components, axios, ...</b>. Je possède une
          bonne maîtrise des langages Web de base:{" "}
          <b>
            JavaScript, HTML5 et CSS3 et une connaissances moyennes sur le PHP
            et MySQL.
          </b>{" "}
          et je m'efforce de créer des applications performantes et accessibles.{" "}
          <br />
          Curieux, rigoureux et toujours en quête de perfectionnement, je reste
          à l'écoute des tendances en développement front-end et des bonnes
          pratiques.
        </motion.p>
      </Section1>

      <Section2>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="photo"
          src={profil}
          alt=""
        />
      </Section2>
    </Head>
  );
};

export default Header;
