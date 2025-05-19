import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstPage } from "./FirstPage";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirstPage />
  </StrictMode>
);
