import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import Notfound from "./NotFound.tsx";
import DashboardPage from "./pages/dashboard/Dashboard.tsx";
import ProductsPage from "./pages/products/Products.tsx";
import OrderPage from "./pages/order/Orders.tsx";
import CustomersPage from "./pages/customers/Customers.tsx";
import CategoriesPage from "./pages/categories/Categories.tsx";
import SettingsPage from "./pages/setting/Settings.tsx";
import StoreLayout from "./layouts/StoreLayout.tsx";
import TopBarPart from "./components/TopBar.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      <QueryClientProvider client={queryClient}>
        <div className="flex">
          <Routes>
            <Route element={<StoreLayout />}>
              <Route path="/TopBarPart" element={<TopBarPart />} />
              <Route path="/ProductsPage" element={<ProductsPage />} />
              <Route path="/OrderPage" element={<OrderPage />} />
              <Route path="/CustomesPage" element={<CustomersPage />} />
              <Route path="/CategoriesPage" element={<CategoriesPage />} />
              <Route path="/SettingsPage" element={<SettingsPage />} />
              <Route path="/" element={<DashboardPage />} />
            </Route>
            <Route path="/not-found" element={<Notfound />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
