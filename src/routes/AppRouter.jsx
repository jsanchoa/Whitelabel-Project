import { Navigate, Route, Routes } from "react-router";
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
import { PrivateRoute } from "@/context/PrivateRoute";
import { SalesAddPage } from "@/components/sales/salesadd";
import { ClientsAdd } from "@/components/clients/clientsadd";
import { ClientsEdit } from "@/components/clients/clientsedit";

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
          <PrivateRoute>
            <Layout data={data}>
              <MainPage />
            </Layout>
          </PrivateRoute>
        }
      />

      //Inventory
      <Route 
        path="/inventory" 
        element={
          <PrivateRoute>
            <Layout data={data.inventory}>
              <InventoryDashboard />
            </Layout>
          </PrivateRoute>
        } 
      />

      <Route 
        path="/inventory/categories" 
        element={
          <PrivateRoute>
            <Layout data={data.inventory_categories}>
              <Categories />
            </Layout>
          </PrivateRoute>
        } 
      />

      <Route 
        path="/inventory/products" 
        element={
          <PrivateRoute>
            <Layout data={data.inventory_products}>
              <Products />
            </Layout>
          </PrivateRoute>
        } 
      />

      //Sales
      <Route 
        path="/sales/dashboard" 
        element={
          <PrivateRoute>
            <Layout data={data.sales}>
              <SalesDashboard />
            </Layout>
          </PrivateRoute>
        } 
      />

      <Route 
        path="/sales/add" 
        element={
          <PrivateRoute>
            <Layout data={data.sales}>
              <SalesAddPage />
            </Layout>
          </PrivateRoute>
        } 
      />

      <Route 
        path="/sales/list" 
        element={
          <PrivateRoute>
            <Layout data={data.sales_list}>
              <Sales />
            </Layout>
          </PrivateRoute>
        } 
      />

      //Billing
      <Route 
        path="/billing" 
        element={
          <PrivateRoute>
            <Layout>
              <Billing />
            </Layout>
          </PrivateRoute>
        } 
      />

      //Accounting
      <Route 
        path="/accounting" 
        element={
          <PrivateRoute>
            <Layout>
              <AccountingDashboard />
            </Layout>
          </PrivateRoute>
        } 
      />

      <Route 
        path="/accounting/income" 
        element={
          <PrivateRoute>
            <Layout>
              <Income />
            </Layout>
          </PrivateRoute>
        } 
      />

      <Route 
        path="/accounting/expenses" 
        element={
          <PrivateRoute>
            <Layout>
              <Expenses />
            </Layout>
          </PrivateRoute>
        } 
      />

      //Purchasing
      <Route 
        path="/purchasing" 
        element={
          <PrivateRoute>
            <Layout>
              <PurchasingProvidersDashboard />
            </Layout>
          </PrivateRoute>
        } 
      />

      <Route 
        path="/purchasing/purchases" 
        element={
          <PrivateRoute>
            <Layout>
              <Purchases />
            </Layout>
          </PrivateRoute>
        } 
      />

      <Route 
        path="/purchasing/providers" 
        element={
          <PrivateRoute>
            <Layout>
              <Providers />
            </Layout>
          </PrivateRoute>
        } 
      />

      //Clients
      <Route 
        path="/clients" 
        element={
          <PrivateRoute>
            <Layout>
              <Clients />
            </Layout>
          </PrivateRoute>
        } 
      />

      <Route 
        path="/clients/add" 
        element={
          <PrivateRoute>
            <Layout>
              <ClientsAdd />
            </Layout>
          </PrivateRoute>
        } 
      />

      <Route 
        path="/clients/edit/:id" 
        element={
          <PrivateRoute>
            <Layout>
              <ClientsEdit />
            </Layout>
          </PrivateRoute>
        } 
      />

      //AdminCenter
      <Route 
        path="/admin-center" 
        element={
          <PrivateRoute>
            <Layout>
              <AdminCenter />
            </Layout>
          </PrivateRoute>
        } 
      />
      
      <Route path="*" element={<Navigate to="/login" />}/>

    </Routes>
  );
};
