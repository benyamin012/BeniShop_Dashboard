import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import SideBarPart from "./components/SideBar";
import ProductsPage from "./pages/products/Products";
import OrderPage from "./pages/order/Orders";
import CustomersPage from "./pages/customers/Customers";
import CategoriesPage from "./pages/categories/Categories";
import SettingsPage from "./pages/setting/Settings";
import DashboardPage from "./pages/dashboard/Dashboard";
import Notfound from "./NotFound";
import TopBarPart from "./components/TopBar";

function App() {
  const location = useLocation();
  console.log(location);

  const is404 = location.pathname === "/not-found";
  console.log(is404);

  return (
    <>
      <div className="flex h-svh overflow-hidden">
        {!is404 && <SideBarPart />}

        <div className="w-full ">
          {!is404 && <TopBarPart />}
          {/* "overflow-y-auto  h-[calc(100%-5rem)]" */}
          <div
            className={`overflow-y-auto  h-[calc(100%-5rem)] ${is404 ? "h-screen" : "h-[calc(100%-5rem) ]"} `}
          >
            <Routes>
              <Route path="/ProductsPage" element={<ProductsPage />} />
              <Route path="/OrderPage" element={<OrderPage />} />
              <Route path="/CustomesPage" element={<CustomersPage />} />
              <Route path="/CategoriesPage" element={<CategoriesPage />} />
              <Route path="/SettingsPage" element={<SettingsPage />} />
              <Route path="/" element={<DashboardPage />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
              <Route path="/not-found" element={<Notfound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
