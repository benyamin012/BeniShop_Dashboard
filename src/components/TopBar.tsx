import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

const TopBarPart = () => {
  return (
    <>
      <section className="w-full justify-between h-20 border-b border-b-gray-300 flex px-10 items-center text-center">
        <div className="flex items-center text-center gap-5 ">
          <GiHamburgerMenu className="cursor-pointer" size={20} />

          <h1 className="text-[20px] font-semibold">Dashboard</h1>
        </div>
        <div className="flex gap-4.5 items-center text-center">
          <div className="relative top-0">
            <IoMdNotificationsOutline size={28} />
            <span className="w-5 h-5 -top-1 absolute -right-1 rounded-full bg-[#155cfe] p-2 flex text-white text-[12px] items-center text-center  justify-center">
              2
            </span>
          </div>
          <button className="px-3 py-2  flex items-center text-center gap-1    rounded-lg border border-gray-300 text-[14px]">
            <LuLogOut />
            Logout
          </button>
        </div>
      </section>
    </>
  );
};

export default TopBarPart;
