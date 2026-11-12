import RecentOrderDetails from "./RecentOrderInformation";
import phone from "../../../assets/images/0a0fbbdbedcb7be1e4cfe35e2776ef07a26d17c4_1759666568-removebg-preview.png";
import car from "../../../assets/images/435792257-18013735832249576-964096162712809224-n-removebg-preview.png";
import keyboard from "../../../assets/images/583c649ceab2c050f1fe273ef1cc175b5cff75f2_1748068357-removebg-preview.png";
import laptop from "../../../assets/images/dae5618f3f702e1954d1a4a2ee65e03f82db0f2b_1777811267.webp";
const RecentOrder = () => {
  return (
    <>
      <section className=" w-[48%] rounded-xl border border-slate-200 bg-white p-5 mt-5 shadow-sm">
        <div className="flex px-2 justify-between">
          <h1 className="font-bold text-xl">Recent Order</h1>
          <button className="text-black border rounded-lg border-gray-300 px-3 py-1.5 text-sm font-medium hover:text-blue-700">
            View All
          </button>
        </div>
        <RecentOrderDetails
          title="car"
          price={150000}
          date="4 oct time:4:25"
          status="success"
          img={car}
          statusColor="bg-green-500/10"
          statusTextColor="text-green-500"
        />
        <RecentOrderDetails
          title="phone"
          price={900}
          date="4 oct time:4:25"
          status="completed"
          img={phone}
          statusColor="bg-green-500/10"
          statusTextColor="text-green-500"
        />
        <RecentOrderDetails
          title="keyboard"
          price={1000}
          date="4 oct time:4:25"
          status="pending"
          img={keyboard}
          statusColor="bg-yellow-500/10"
          statusTextColor="text-yellow-500"
        />
        <RecentOrderDetails
          title="laptop"
          price={1000}
          date="4 oct time:4:25"
          status="processing"
          img={laptop}
          statusColor="bg-blue-500/10"
          statusTextColor="text-blue-500"
        />
      </section>
    </>
  );
};

export default RecentOrder;
