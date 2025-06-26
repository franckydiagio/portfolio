import React, { useState } from "react";
import styled from "styled-components";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
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
} from "../styles/GlobalStyle";
import { motion } from "framer-motion";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  font-family: ${font__family};
  color: ${color__light};
  padding: ${padding__section};

  @media screen and (max-width: 1050px) {
    padding: ${ps__mobile_1050};
  }

  @media screen and (max-width: 750px) {
    padding: ${ps__mobile_750};
  }

  @media screen and (max-width: 350px) {
    padding: ${ps__mobile_350};
  }

  .nav__logo {
    font-size: 20px;
    font-weight: ${fw__medium};
  }

  .nav__links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    max-width: 100%;
    @media screen and (max-width: 750px) {
      display: none;
    }
  }

  .nav__links a {
    color: ${color__light};
    text-decoration: none;
    transition: 0.5s ease-in-out;

    &:hover {
      color: ${color__gold};
    }
  }

  .nav__sign svg {
    display: none;
    size: 27;
    color: ${color__light};

    @media screen and (max-width: 750px) {
      display: flex;
    }
  }

  .nav__menu {
    display: none;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    padding: 1.5rem 2rem;
    border-radius: 4px;

    position: absolute;
    background: ${color__dark};
    right: 100px;
    top: 53px;

    @media screen and (max-width: 750px) {
      display: flex;
      right: 35px;
      top: 53px;
    }

    @media screen and (max-width: 350px) {
      right: 20px;
      top: 53px;
      padding: 2rem 1.5rem;
    }

    a {
      color: ${color__light};
      text-decoration: none;
      transition: 0.5s ease-in-out;
      margin: 0.5rem 0;

      &:hover {
        color: ${color__gold};
      }
    }
  }
`;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const Menu = (
    <>
      <a href="#home">Mon profil</a>
      <a href="#skills">Mes capacités</a>
      <a href="#projets">Projets réalisés</a>
      <a href="#contact">Me contacter</a>
    </>
  );
  return (
    <Nav>
      <div className="nav__logo">Portfolio</div>

      <div className="nav__links">{Menu}</div>

      <div className="nav__sign">
        {toggle ? (
          <RiCloseLine onClick={() => setToggle(false)} />
        ) : (
          <RiMenu3Line onClick={() => setToggle(true)} />
        )}

        {toggle && <div className="nav__menu">{Menu}</div>}
      </div>
    </Nav>
  );
};

export default Navbar;
