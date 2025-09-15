import React from "react";
import styled from "styled-components";
import {
  color__gold,
  color__light,
  font__family,
  fw__medium,
  padding__section,
  SubTitle,
  SubTitle2,
} from "../styles/GlobalStyle";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaKeyboard,
  FaWifi,
  FaJsSquare,
} from "react-icons/fa";
import { FaComputer, FaGit, FaPhp } from "react-icons/fa6";
import { BsBootstrap } from "react-icons/bs";
import { motion } from "framer-motion";
import { SiMysql } from "react-icons/si";

const Skls = styled.div`
  padding: ${padding__section};
  font-family: ${font__family};

  @media screen and (max-width: 850px) {
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 3rem;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  div {
    border-radius: 4px;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.07);
    }

    p {
      margin: 0.3rem;
      text-align: center;
      color: ${color__light};
      padding: 0.3rem;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      font-weight: ${fw__medium};
      font-size: 15px;
      line-height: 25px;
    }
    svg {
      font-size: 80px;
      padding: 0.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    align-items: center;
    justify-content: center;
  }
`;

const CardContainer2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  div {
    display: inherit;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    svg {
      color: #fff;
      border-radius: 30%;
      font-size: 80px;
      padding: 0.5rem;
    }

    p {
      color: ${color__light};
      width: 100%;
      font-size: 15px;
      line-height: 25px;
    }
  }
`;

const Skills = () => {
  return (
    <Skls id="skills">
      <SubTitle className="subtitle1">Mes capacités</SubTitle>

      <Section>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SubTitle2 className="subtitle2">Développement Web</SubTitle2>
          <CardContainer>
            <div>
              <FaReact color="cyan" />
              <p>React</p>
            </div>
            <div>
              <FaHtml5 color="red" />
              <p>HTML5</p>
            </div>
            <div>
              <FaCss3Alt color="cyan" />
              <p>CSS3</p>
            </div>
            <div>
              <FaJsSquare color={color__gold} />
              <p>JavaScript</p>
            </div>
            <div>
              <BsBootstrap color="purple" />
              <p>Bootstrap</p>
            </div>
            <div>
              <FaPhp color="blue" />
              <p>PHP</p>
            </div>
            <div>
              <SiMysql color="cyan" />
              <p>MySQL</p>
            </div>
          </CardContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SubTitle2 className="sub__title">Autres compétences</SubTitle2>
          <CardContainer2>
            <div>
              <FaComputer color="" />
              <p>
                Connaissance moyenne en matière de maintenance Hardware et
                Software.
              </p>
            </div>
            <div>
              <FaWifi color="" />
              <p>
                Connaissance en réseau local d'entreprise (LAN). Création et
                gestion de parc informatique local.
              </p>
            </div>
            <div>
              <FaKeyboard color="" />
              <p>
                Bonne maîtrise des outils bureautiques: Microsoft Office(Word,
                Excel, PowerPoint, Publisher, ...).
              </p>
            </div>
            <div>
              <FaGit color="" />
              <p>
                Utilisant git comme outil de versionning et de colaboration avec
                les autres développeurs.
              </p>
            </div>
          </CardContainer2>
        </motion.div>
      </Section>
    </Skls>
  );
};

export default Skills;
