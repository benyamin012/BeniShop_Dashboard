import { AiOutlineShopping } from "react-icons/ai";
import TopCartDashboard from "../dashboard/components/TopCartOfDashboard";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const ProductsPage = () => {
  return (
    <div className="w-full p-6">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">Dashboard</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <TopCartDashboard
          icon={<AiOutlineShopping size={25} />}
          title="Total Products"
          price="5,000"
          description="Total Products received"
          data={[10, 25, 40, 5, 25, 60, 12]}
          color="#1100ff"
        />

        <TopCartDashboard
          icon={<FaUsers size={25} />}
          title="Active Products"
          price="550"
          description="Active products in inventory"
          data={[50, 20, 15, 35, 10, 10, 27]}
          color="#00f7ff"
        />

        <TopCartDashboard
          icon={<MdOutlineProductionQuantityLimits size={25} />}
          title="Low Stock"
          price="220"
          description="Products with low inventory"
          data={[10, 65, 45, 35, 25, 40, 15]}
          color="#ff0000"
        />

        <TopCartDashboard
          icon={<FaDollarSign size={25} />}
          title="Out of Stock"
          price="$1,500,000"
          description="Products with no inventory"
          data={[10, 20, 15, 30, 25, 40, 35]}
          color="#00ffb3"
        />
      </div>
    </div>
  );
};

export default ProductsPage;
