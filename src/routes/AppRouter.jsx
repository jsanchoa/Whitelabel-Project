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
import PurchasingProvidersDashboard from "../pages/PurchasingProvidersDashboard";
import { Purchases } from "../pages/Purchases";
import { Providers } from "../pages/Providers";
import { Clients } from "@/pages/Clients";
import { AdminCenter } from "@/pages/AdminCenter";

export const AppRouter = () => {

  const data = {
    clients: {
      first_page: "Dashboard",
      second_page: "Clients",
      url: "",
    },
    inventory: {
      first_page: "Dashboard",
      second_page: "Inventory",
      url: "/inventory",
    },
    inventory_categories: {
      first_page: "Dashboard",
      second_page: "Categories  ",
      url: "/inventory",
    },
    inventory_products: {
      first_page: "Dashboard",
      second_page: "Products",
      url: "/inventory",
    },
    sales: {
      first_page: "Dashboard",
      second_page: "Sales",
      url: "/sales/dashboard",
    },
    sales_list: {
      first_page: "Dashboard",
      second_page: "Sales List",
      url: "/sales/dashboard",
    },
  };


  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <Layout data={data}>
            <MainPage />
          </Layout>
        }
      />

      //Inventory
      <Route 
        path="/inventory" 
        element={
          <Layout data={data.inventory}>
            <InventoryDashboard />
          </Layout>
        } 
      />

      <Route 
        path="/inventory/categories" 
        element={
          <Layout data={data.inventory_categories}>
            <Categories />
          </Layout>
        } 
      />

      <Route 
        path="/inventory/products" 
        element={
          <Layout data={data.inventory_products}>
            <Products />
          </Layout>
        } 
      />

      //Sales
      <Route 
        path="/sales/dashboard" 
        element={
          <Layout data={data.sales}>
            <SalesDashboard />
          </Layout>
        } 
      />

      <Route 
        path="/sales/list" 
        element={
          <Layout data={data.sales_list}>
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
