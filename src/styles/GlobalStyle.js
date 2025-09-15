import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter";
  }

  body {
    background: #141414;
  }
`;

export const SubTitle = styled.h2`
  color: teal;
  max-width: 80%;
  margin: 1rem 0;
`;

export const SubTitle2 = styled.p`
  color: #b6a416;
  font-family: "Ephesis";
  font-size: 30px;
`;

export const color__gold = "#b6a416";
export const color__light = "#d6d0d0";
export const color__dark = "#000";
export const color__secondary = "#141414";
export const color__teal = "teal";
export const padding__section = "1rem 6rem";
export const padding__button = "0.7rem 1rem";
export const font__family = "Segoe UI";
export const fw__normal = "500";
export const fw__medium = "600";
export const fw__bold = "700";
export const ps__mobile_1050 = "1rem 4rem";
export const ps__mobile_750 = "1rem 2rem";
export const ps__mobile_350 = "1rem 1rem";

export default {
  GlobalStyle,
  SubTitle,
  SubTitle2,
  ps__mobile_1050,
  ps__mobile_350,
  font__family,
  fw__normal,
  fw__medium,
  fw__bold,
  color__gold,
  color__dark,
  color__secondary,
  color__light,
  color__teal,
  padding__button,
  padding__section,
};
