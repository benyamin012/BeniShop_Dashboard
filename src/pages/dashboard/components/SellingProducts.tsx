import phone from "../../../assets/images/0a0fbbdbedcb7be1e4cfe35e2776ef07a26d17c4_1759666568-removebg-preview.png";
import car from "../../../assets/images/435792257-18013735832249576-964096162712809224-n-removebg-preview.png";
// import keyboard from "../../../assets/images/583c649ceab2c050f1fe273ef1cc175b5cff75f2_1748068357-removebg-preview.png";
// import laptop from "../../../assets/images/dae5618f3f702e1954d1a4a2ee65e03f82db0f2b_1777811267.webp";
// import SellingProductDetails from "./SellingProductsComponent";
const SellingProducts = () => {
  return (
    <section className=" w-[52%] rounded-xl border border-slate-200 bg-white p-5 mt-5 shadow-sm">
      <div className="flex  justify-between">
        <h1 className="font-bold text-xl">Top Selling Products</h1>
        <button className="text-black border rounded-lg border-gray-300 px-3 py-1.5 text-sm font-medium hover:text-blue-700">
          View All
        </button>
      </div>
      <table className="w-full items-center relative  text-center my-5  ">
        <tr className="border-b  border-b-gray-300 shadow-2xs w-full ">
          <th className="font-medium text-sm py-2.5 text-start">Product</th>
          <th className="font-medium text-sm px-53 text-end">Sold</th>
          <th className="font-medium text-sm ">Revenue</th>
        </tr>
        <tr className="border-b border-b-gray-200  ">
          <td className="py-5 flex items-center text-center gap-2.5">
            <img
              className="aspect-square h-15 rounded-lg bg-gray-100 p-1.5"
              src={car}
              alt=""
            />
            <h3 className="font-medium">{"Porche 911 turbo S"}</h3>
          </td>
          <td className="font-medium">258</td>
          <td className="font-medium">$5200</td>
        </tr>
        <tr className="border-b border-b-gray-200  ">
          <td className="py-5 flex items-center text-center gap-2.5">
            <img
              className="aspect-square h-15 rounded-lg bg-gray-100 p-1.5"
              src={phone}
              alt=""
            />
            <h3 className="font-medium ">{"Iphone 17 proMax orenge"}</h3>
          </td>
          <td className="font-medium">28</td>
          <td className="font-medium">$1200</td>
        </tr>
      </table>
    </section>
  );
};

export default SellingProducts;
