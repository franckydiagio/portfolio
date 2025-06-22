import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const elementDOM = document.getElementById("root");
const root = createRoot(elementDOM);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
