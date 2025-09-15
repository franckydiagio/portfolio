import React, { useState } from "react";
import styled from "styled-components";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 1.5rem 6rem;
  color: lightgrey;

  .nav__logo {
    font-size: 20px;
    font-weight: bold;
    color: orangered;
  }

  .nav__links a {
    margin-left: 0.5rem;
    color: lightgrey;
    text-decoration: none;
    padding: 0.5rem 0;
    border: 1px solid transparent;
    font-size: 15px;
    transition: 0.5s;

    &:hover {
      border-bottom: 1px solid orangered;
      color: orangered;
    }
  }

  .nav__sign {
    display: none;
  }

  @media screen and (max-width: 1050px) {
    .nav__links {
      display: none;
    }

    .nav__sign {
      display: flex;

      .nav__menu {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        top: 60px;
        right: 100px;
        background: #121212;
        padding: 1.5rem 1rem;
        box-shadow: 0 0 15px 2px rgba(255, 255, 255, 0.5);
        border-radius: 4px;
      }

      a {
        color: lightgrey;
        text-decoration: none;
        padding: 0.5rem 0;
        border: 1px solid transparent;
        transition: 0.5s;
        font-size: 15px;

        &:hover {
          border-bottom: 1px solid orangered;
          color: orangered;
        }
      }
    }
  }
`;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const Menu = (
    <>
      <a href="#home" onClick={() => setToggle(false)}>
        Mon profil
      </a>
      <a href="#skills" onClick={() => setToggle(false)}>
        Mes capacités
      </a>
      <a href="#projets" onClick={() => setToggle(false)}>
        Projets réalisés
      </a>
      <a href="#contact" onClick={() => setToggle(false)}>
        Me contacter
      </a>
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
