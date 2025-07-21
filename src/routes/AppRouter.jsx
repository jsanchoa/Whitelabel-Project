import { Route, Routes } from "react-router";
import Layout from "../Layout";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { InventoryDashboard } from "../pages/InventoryDashboard";
import { Categories } from "../pages/Categories";
import { Products } from "../pages/Products";
import { SalesDashboard } from "../pages/SalesDashboard";
import { Sales } from "../pages/Sales";
import { Billing } from "../pages/Billing";
import { AccountingDashboard } from "../pages/AccountingDashboard";
import { Income } from "../pages/Income";
import { Expenses } from "../pages/Expenses";
import { PurchasingProvidersDashboard } from "../pages/PurchasingProvidersDashboard";
import { Purchases } from "../pages/Purchases";
import { Providers } from "../pages/Providers";
import { Clients } from "@/pages/Clients";
import { AdminCenter } from "@/pages/AdminCenter";

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

      //Inventory
      <Route 
        path="/inventory" 
        element={
          <Layout>
            <InventoryDashboard />
          </Layout>
        } 
      />

      <Route 
        path="/inventory/categories" 
        element={
          <Layout>
            <Categories />
          </Layout>
        } 
      />

      <Route 
        path="/inventory/products" 
        element={
          <Layout>
            <Products />
          </Layout>
        } 
      />

      //Sales
      <Route 
        path="/sales" 
        element={
          <Layout>
            <SalesDashboard />
          </Layout>
        } 
      />

      <Route 
        path="/sales/sales" 
        element={
          <Layout>
            <Sales />
          </Layout>
        } 
      />

      //Billing
      <Route 
        path="/billing" 
        element={
          <Layout>
            <Billing />
          </Layout>
        } 
      />

      //Accounting
      <Route 
        path="/accounting" 
        element={
          <Layout>
            <AccountingDashboard />
          </Layout>
        } 
      />

      <Route 
        path="/accounting/income" 
        element={
          <Layout>
            <Income />
          </Layout>
        } 
      />

      <Route 
        path="/accounting/expenses" 
        element={
          <Layout>
            <Expenses />
          </Layout>
        } 
      />

      //Purchasing
      <Route 
        path="/purchasing" 
        element={
          <Layout>
            <PurchasingProvidersDashboard />
          </Layout>
        } 
      />

      <Route 
        path="/purchasing/purchases" 
        element={
          <Layout>
            <Purchases />
          </Layout>
        } 
      />

      <Route 
        path="/purchasing/providers" 
        element={
          <Layout>
            <Providers />
          </Layout>
        } 
      />

      //Clients
      <Route 
        path="/clients" 
        element={
          <Layout>
            <Clients />
          </Layout>
        } 
      />

      //AdminCenter
      <Route 
        path="/admin-center" 
        element={
          <Layout>
            <AdminCenter />
          </Layout>
        } 
      />

    </Routes>
  );
};
