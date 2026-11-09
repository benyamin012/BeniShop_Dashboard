interface RecentOrderProps {
  img: string;
  title: string;
  price: string | number;
  date: string;
  status: string;
  statusColor?: string;
  statusTextColor?: string;
}

const RecentOrderDetails = ({
  title,
  price,
  date,
  status,
  img,
  statusColor,
  statusTextColor,
}: RecentOrderProps) => {
  return (
    <>
      <section className=" w-full rounded-xl border border-slate-200 bg-white p-2.5 mt-5 shadow-sm">
        <div className="flex gap-5 justify-between items-center">
          <div className="flex gap-5 items-center">
            <img
              src={img}
              alt=""
              className="w-20 h-20 rounded-lg bg-gray-100 p-2.5"
            />
            <div>
              <h1 className="font-semibold text-xl">{title}</h1>
              <span className="font-medium  text-sm text-gray-400">{date}</span>
            </div>
          </div>
          {/* <button className="w-25 h-10 bg-blue-300 rounded-full"> */}
          <button
            className={`w-25 h-10 ${statusColor} rounded-full ${statusTextColor} px-4 py-2 text-sm font-semibold`}
          >
            {status}
          </button>
          <span className="font-bold text-lg">${price}</span>
        </div>
      </section>
    </>
  );
};

export default RecentOrderDetails;
