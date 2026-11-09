interface RecentOrderProps {
  img: string;
  title: string;
  price: string | number;
  date: string;
  status: string;
}

const RecentOrderDetails = ({
  title,
  price,
  date,
  status,
  img,
}: RecentOrderProps) => {
  return (
    <>
      <section className=" w-full rounded-xl border border-slate-200 bg-white p-5 mt-5 shadow-sm">
        <div className="flex gap-5 justify-between mt-5 items-center">
          <img src={img} alt="" className="w-10 h-10" />
          <div>
            <h1>{title}</h1>
            <span>{date}</span>
          </div>
          <button>{status}</button>
          <span>{price}</span>
        </div>
      </section>
    </>
  );
};

export default RecentOrderDetails;
