interface RecentOrderProps {
  img: string;
  title: string;
  howManySold: string | number;
  totalPrice: number;
}

const SellingProductDetails = ({
  title,
  howManySold,
  totalPrice,
  img,
}: RecentOrderProps) => {
  return (
    <>
      <section className=" w-full rounded-sm  bg-white p-2.5 mt-5   ">
        <div className="flex gap-5 justify-between items-center">
          <div className="flex items-center text-center gap-2.5">
            <img className="w-10 h-10" src={img} alt="" />
            <h3>{title}</h3>
          </div>

          <span>{howManySold}</span>
          <h4>{totalPrice}</h4>
        </div>
      </section>
    </>
  );
};

export default SellingProductDetails;
