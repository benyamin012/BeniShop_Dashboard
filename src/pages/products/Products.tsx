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
        />

        <TopCartDashboard
          icon={<FaUsers size={25} />}
          title="Active Products"
          price="550"
          description="Active products in inventory"
        />

        <TopCartDashboard
          icon={<MdOutlineProductionQuantityLimits size={25} />}
          title="Low Stock"
          price="220"
          description="Products with low inventory"
        />

        <TopCartDashboard
          icon={<FaDollarSign size={25} />}
          title="Out of Stock"
          price="$1,500,000"
          description="Products with no inventory"
        />
      </div>
    </div>
  );
};

export default ProductsPage;
