import RecentOrderDetails from "./RecentOrderInformation";

const RecentOrder = () => {
  return (
    <>
      <section className=" w-[48%] rounded-xl border border-slate-200 bg-white p-5 mt-5 shadow-sm">
        <div className="flex px-2 justify-between">
          <h1>Recent Order</h1>
          <button>View All</button>
          <img
            src="./../../assets/images/0a0fbbdbedcb7be1e4cfe35e2776ef07a26d17c4_1759666568-removebg-preview.png"
            alt=""
          />
        </div>
        <RecentOrderDetails
          title="car"
          price={1000}
          date="4 oct time:4:25"
          status="pending"
          img=""
        />
      </section>
    </>
  );
};

export default RecentOrder;
