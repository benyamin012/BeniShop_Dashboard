import { Outlet } from "react-router-dom";
import SideBarPart from "../components/SideBar";
import TopBarPart from "../components/TopBar";
export default function StoreLayout() {
  return (
    <>
      <SideBarPart />
      <main className="w-full ">
        <TopBarPart />
        <Outlet />
      </main>
    </>
  );
}
