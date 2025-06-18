import { Route, Routes } from "react-router";
import Layout from "../Layout";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <MainPage />
          </Layout>
        }
      />
    </Routes>
  );
};
