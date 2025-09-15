import React from "react";
import styled from "styled-components";
import {
  color__light,
  font__family,
  fw__medium,
  SubTitle,
} from "../styles/GlobalStyle";
import { padding__section } from "../styles/GlobalStyle";
import {
  BsFacebook,
  BsGithub,
  BsMailbox,
  BsPhone,
  BsWhatsapp,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Cta = styled.div`
  margin: ${padding__section};
  background: #222121;
  border-radius: 10px;
  padding: 1rem;
  font-family: ${font__family};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  table {
    color: ${color__light};
    max-width: 100%;
    td {
      padding: 0.7rem 1rem;
      font-size: 15px;

      div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;

        span {
          font-weight: ${fw__medium};
          @media screen and (max-width: 450px) {
            display: none;
          }
        }

        svg {
          font-size: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 1050px) {
    margin: 1rem 4rem;
  }

  @media screen and (max-width: 850px) {
    margin: 1rem 1rem;
  }
`;

const Contact = () => {
  return (
    <Cta id="contact">
      <SubTitle>Me contacter</SubTitle>
      <motion.table
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <tbody>
          <tr>
            <td>
              <div>
                <BsMailbox color="lightblue" />
                <span>Email</span>
              </div>
            </td>
            <td>franckydiagio@gmail.com</td>
          </tr>

          <tr>
            <td>
              <div>
                <BsWhatsapp color="green" />
                <span>Whatsapp</span>
              </div>
            </td>
            <td>033 74 953 67 / 038 57 559 93</td>
          </tr>

          <tr>
            <td>
              <div>
                <BsGithub color="" />
                <span>Github</span>
              </div>
            </td>
            <td>franckydiagio</td>
          </tr>

          <tr>
            <td>
              <div>
                <BsPhone color={color__light} />
                <span>Téléphone</span>
              </div>
            </td>
            <td>033 34 292 95 / 038 57 559 93</td>
          </tr>

          <tr>
            <td>
              <div>
                <BsFacebook color="cyan" />
                <span>Facebook</span>
              </div>
            </td>
            <td>Jo Jo</td>
          </tr>
        </tbody>
      </motion.table>
    </Cta>
  );
};

export default Contact;
