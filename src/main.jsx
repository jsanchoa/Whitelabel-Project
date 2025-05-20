import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import { MainPage } from "./MainPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout>
      <MainPage />
    </Layout>
  </StrictMode>
);
