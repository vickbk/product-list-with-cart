import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/scss/styles.scss";
import "./styles/global.css";
import App from "./App.tsx";

createRoot(document.body!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
