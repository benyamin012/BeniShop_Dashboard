import TopCartDashboard from "./components/TopCartOfDashboard";

import { AiOutlineShopping } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

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
        />

        <TopCartDashboard
          icon={<FaUsers size={25} />}
          title="Total Customers"
          price="850"
          description="Registered customers"
        />

        <TopCartDashboard
          icon={<MdOutlineProductionQuantityLimits size={25} />}
          title="Total Products"
          price="320"
          description="Available products"
        />

        <TopCartDashboard
          icon={<FaDollarSign size={25} />}
          title="Total Revenue"
          price="$12,500"
          description="Total revenue generated"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
