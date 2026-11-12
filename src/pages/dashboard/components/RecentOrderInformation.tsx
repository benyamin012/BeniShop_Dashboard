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
      <section className=" w-full rounded-sm  bg-white p-2.5 mt-5 border-b-gray-200 border-b ">
        <div className="flex gap-5 justify-between items-center">
          <div className="flex gap-5 items-center">
            <img
              src={img}
              alt=""
              className="aspect-square h-15 rounded-lg bg-gray-100 p-1.5"
            />
            <div>
              <h1 className="font-semibold text-lg">{title}</h1>
              <span className="font-medium  text-xs text-gray-400">{date}</span>
            </div>
          </div>
          {/* <button className="w-25 h-10 bg-blue-300 rounded-full"> */}
          <button
            className={`w-20 cursor-pointer ${statusColor} rounded-full ${statusTextColor} px-2.5 py-1 text-xs font-semibold`}
          >
            {status}
          </button>
          <span className="font-bold text-base">${price}</span>
        </div>
      </section>
    </>
  );
};

export default RecentOrderDetails;
