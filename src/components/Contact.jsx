import React from "react";
import styled from "styled-components";
import {
  color__dark,
  color__light,
  font__family,
  fw__medium,
  ps__mobile_1050,
  ps__mobile_350,
  ps__mobile_750,
  SubTitle,
} from "../styles/GlobalStyle";
import { padding__section } from "../styles/GlobalStyle";
import { BsFacebook, BsMailbox, BsPhone, BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

const Cta = styled.div`
  margin: ${padding__section};
  background: ${color__dark};
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
    margin: ${ps__mobile_1050};
  }

  @media screen and (max-width: 750px) {
    margin: ${ps__mobile_750};
  }

  @media screen and (max-width: 350px) {
    margin: ${ps__mobile_350};
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
                <BsFacebook color="blue" />
                <span>Facebook</span>
              </div>
            </td>
            <td>Jo Jo</td>
          </tr>
          <tr>
            <td>
              <div>
                <BsMailbox color="red" />
                <span>Email</span>
              </div>
            </td>
            <td>diagioran@gmail.com</td>
          </tr>
          <tr>
            <td>
              <div>
                <BsWhatsapp color="green" />
                <span>Whatsapp</span>
              </div>
            </td>
            <td>033 74 953 67</td>
          </tr>

          <tr>
            <td>
              <div>
                <BsPhone color={color__light} />
                <span>Téléphone</span>
              </div>
            </td>
            <td>033 74 953 67 / 038 14 928 84</td>
          </tr>
        </tbody>
      </motion.table>
    </Cta>
  );
};

export default Contact;
