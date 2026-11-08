import TopCartDashboard from "./components/TopCartOfDashboard";

import { AiOutlineShopping } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

import SalesOverview from "./components/SalesOverview";
import RecentOrder from "./components/RecentOrder";
const DashboardPage = () => {
  return (
    <div className="w-full p-6">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">Dashboard</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <TopCartDashboard
          icon={<AiOutlineShopping size={25} />}
          title="Total Orders"
          price="1,250"
          description="Total orders received"
          data={[10, 25, 40, 5, 25, 60, 12]}
          color="#1100ff"
        />

        <TopCartDashboard
          icon={<FaUsers size={25} />}
          title="Total Customers"
          price="850"
          description="Registered customers"
          data={[50, 20, 15, 35, 10, 10, 27]}
          color="#00f7ff"
        />

        <TopCartDashboard
          icon={<MdOutlineProductionQuantityLimits size={25} />}
          title="Total Products"
          price="320"
          description="Available products"
          data={[10, 65, 45, 35, 25, 40, 15]}
          color="#ff0000"
        />

        <TopCartDashboard
          icon={<FaDollarSign size={25} />}
          title="Total Revenue"
          price="$12,500"
          description="Total revenue generated"
          data={[10, 20, 15, 30, 25, 40, 35]}
          color="#00ffb3"
        />
      </div>
      <div className="flex  gap-2.5">
        <SalesOverview />
        <RecentOrder
          title="Gun"
          price={1000}
          date="4 oct time:4:25"
          status="pending"
          img="jkdf;ljf;lfdjk"
        />
        <RecentOrder
          title="car"
          price={25000}
          date="5 jun time:10:25"
          status="completed"
          img="salam"
        />
        <RecentOrder
          title="phone"
          price={999}
          date="4 oct time:4:25"
          status="pending"
          img="phone"
        />
        <RecentOrder
          title="Gun"
          price={1000}
          date="4 oct time:4:25"
          status="pending"
          img="jkdf;ljf;lfdjk"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
