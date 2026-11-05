import { AiOutlineShopping } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const SideBarPart = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  console.log(username);

  return (
    <div className="continer  flex flex-col shrink-0 w-2xs   p-5 h-screen bg-[#02132e]">
      <div className=" flex w-full top-0 gap-1">
        <AiOutlineShopping
          className="text-5xl max-lg:text-3xl"
          color="#0559F9"
          size={55}
        />
        <div>
          <h1 className="text-2xl font-bold text-[#0559f9]">Beni Shop</h1>
          <span className="mt-1 block text-gray-200">Admin Panel</span>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <ul className=" mt-5 flex flex-col gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white flex gap-2.5 font-semibold p-3 items-center rounded-[10px]
      ${isActive ? "bg-[#032c8c]" : ""}`
                }
              >
                <RxDashboard size={25} />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ProductsPage"
                className={({ isActive }) =>
                  `text-white flex gap-2.5 font-semibold p-3 items-center rounded-[10px]
    ${isActive ? "bg-[#032c8c]" : ""}`
                }
              >
                <MdOutlineProductionQuantityLimits size={25} />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/OrderPage"
                className={({ isActive }) =>
                  `text-white flex gap-2.5 font-semibold p-3 items-center rounded-[10px]
    ${isActive ? "bg-[#032c8c]" : ""}`
                }
              >
                <FaJediOrder size={25} />
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/CustomesPage"
                className={({ isActive }) =>
                  `text-white flex gap-2.5 font-semibold p-3 items-center rounded-[10px]
    ${isActive ? "bg-[#032c8c]" : ""}`
                }
              >
                <FaRegUser size={25} />
                Customers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/CategoriesPage"
                className={({ isActive }) =>
                  `text-white flex gap-2.5 font-semibold p-3 items-center rounded-[10px]
    ${isActive ? "bg-[#032c8c]" : ""}`
                }
              >
                <CiFileOn size={25} />
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/SettingsPage"
                className={({ isActive }) =>
                  `text-white flex gap-2.5 font-semibold p-3 items-center rounded-[10px]
    ${isActive ? "bg-[#032c8c]" : ""}`
                }
              >
                <IoSettingsOutline size={25} />
                Settings
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="bg-[#071b3b] bottom-0 text-white flex gap-2.5 font-semibold p-3 items-center rounded-[10px]">
          <FaRegUser
            size={25}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full p-1 bg-blue-50 text-blue-600"
          />
          <div>
            <h2 className="font-medium">{username}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarPart;
