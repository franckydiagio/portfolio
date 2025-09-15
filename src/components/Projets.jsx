import React from "react";
import styled from "styled-components";
import { my_portfolio, gelato } from "../assets/imports";
import { motion } from "framer-motion";

const ProjetsContainer = styled.div`
  margin: 1rem 6rem;
  color: lightgrey;

  h2 {
    color: teal;
    margin-bottom: 1rem;
  }

  hr {
    margin: 1rem 0;
  }

  .projets {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;

    img {
      width: 350px;
      height: auto;
      box-shadow: 0 2px 5px #fff;
    }

    p {
      font-size: 15px;
    }

    a {
      font-size: 15px;
      color: #5962e7;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 1050px) {
    margin: 1rem 4rem;
    .projets {
      flex-direction: column;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 850px) {
    margin: 1rem 1rem;
    .projets {
      flex-direction: column;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

const Projets = () => {
  return (
    <ProjetsContainer id="projets">
      <h2>Mes projets</h2>

      {/* GELATO BELLA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="projets"
      >
        <div className="container1">
          <img src={gelato} alt="image_projet_gelato-bella" />
        </div>

        <div className="container2">
          <h3>Gelato-Bella : Site Vitrine</h3>
          <br />
          <h4>Description: </h4>
          <p>Site Web vitrine d'un vendeur de glace artisanale italienne.</p>
          <br />
          <h4>Objectifs de création:</h4>
          <p>
            Cibler les clients, partenariat, et représentation d'identité de
            l'entreprise (existance, contact, spécialités, nouveautés).
          </p>
          <br />
          <h4>Fonctionnalité: </h4>
          <p>Animation fluide, responsive design et navigation dynamique.</p>
          <br />
          <h4>Date de développement:</h4>
          <p>Septembre 2025</p>
          <br />
          <h4>Dernière modification (date): </h4>
          <p>-</p>
          <br />
          <h4>Code: </h4>
          <p>
            <a
              href="https://github.com/franckydiagio/gelato-bella.git"
              target="blank"
            >
              https://frackydiagio/gelato-bella.git
            </a>
          </p>
          <br />
          <h4>Démo</h4>
          <p>
            <a
              href="https://franckydiagio.github.io/gelato-bella"
              target="blank"
            >
              https://franckydiagio.github.io/gelato-bella
            </a>
          </p>
        </div>
      </motion.div>

      <hr />

      {/* PORTFOLIO PERSONNEL */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="projets"
      >
        <div className="container1">
          <img src={my_portfolio} alt="image_projet_portfolio" />
        </div>

        <div className="container2">
          <h3>Portfolio personnel</h3>
          <h4>Description: </h4>
          <p>
            Mon premier site Web crée en react qui regroupe mes capacitées de
            développeur en react.
          </p>
          <br />
          <h4>Objectifs de création:</h4>
          <p>
            Mettre en avant mes compétence en tant que développeur front-end, et
            représentation de mon profil de développeur.
          </p>
          <br />
          <h4>Fonctionnalité: </h4>
          <p>Animation fluide, responsive design et navigation dynamique.</p>
          <br />
          <h4>Date de développement:</h4>
          <p>Mai 2025</p>
          <br />
          <h4>Dernière modification (date): </h4>
          <p>Aoùt 2025</p>
          <br />
          <h4>Code: </h4>
          <p>
            <a
              href="https://github.com/franckydiagio/portfolio.git"
              target="blank"
            >
              https://frackydiagio/portfolio.git
            </a>
          </p>
          <br />
          <h4>Démo</h4>
          <p>
            <a href="https://franckydiagio.github.io/portfolio" target="blank">
              https://franckydiagio.github.io/portfolio
            </a>
          </p>
        </div>
      </motion.div>
    </ProjetsContainer>
  );
};

export default Projets;
