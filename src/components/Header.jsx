import React from "react";
import {
  color__dark,
  color__gold,
  color__light,
  color__teal,
  font__family,
  padding__section,
  ps__mobile_1050,
  ps__mobile_350,
  ps__mobile_750,
  SubTitle,
} from "../styles/GlobalStyle";
import photo from "../assets/etudiant1.jpg";
import styled from "styled-components";
import { easeIn, easeInOut, motion } from "framer-motion";

const media850 = `
  @media screen and (max-width: 850px) {
    max-width: 100%;
  }
`;

const Head = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 2rem;

  font-family: ${font__family};
  padding: ${padding__section};

  @media screen and (max-width: 1050px) {
    padding: ${ps__mobile_1050};
  }

  @media screen and (max-width: 850px) {
    padding: ${ps__mobile_1050};
    flex-direction: column;
  }

  @media screen and (max-width: 750px) {
    padding: ${ps__mobile_750};
  }

  @media screen and (max-width: 350px) {
    padding: ${ps__mobile_350};
  }
`;

const Section1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  h1 {
    color: ${color__gold};
  }

  h3 {
    color: ${color__teal};
    background: ${color__teal};
    width: 130%;
    padding: 0.5rem;
    border-radius: 4px;
    margin: 1rem 0;
    color: ${color__light};
    ${media850};
    @media screen and (max-width: 550px) {
      text-align: center;
    }
  }

  p {
    color: ${color__light};
    width: 130%;
    text-align: start;
    text-indent: 3rem;
    margin-top: 1.5rem;
    letter-spacing: 0.05px;
    font-size: 15px;
    opacity: 0.9;
    ${media850};

    @media screen and (max-width: 550px) {
      text-align: center;
      text-indent: 0;
    }
  }
`;

const Section2 = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  .photo {
    width: 55%;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    box-shadow: 0 0 15px ${color__dark};

    @media screen and (max-width: 1050px) {
      width: 60%;
    }

    @media screen and (max-width: 850px) {
      width: 40%;
    }

    @media screen and (max-width: 550px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 850px) {
    align-items: center;
    justify-content: center;
  }
`;

const Header = () => {
  return (
    <Head id="home">
      <Section1>
        <SubTitle>Mon profile</SubTitle>
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
          Diplômé de Licence en Informatique et Programmation. Développeur
          front-end junior en react, utilisant l'écosystème: styled-components,
          framer-motion, react-router. Maîtrisant les langages de base
          JavaScript, html et css.
        </motion.p>
      </Section1>

      <Section2>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="photo"
          src={photo}
          alt=""
        />
      </Section2>
    </Head>
  );
};

export default Header;
