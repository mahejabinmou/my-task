const Visual = () => {
  return (
    <div className="  pt-[150px]  h-auto">
      <div className="text-white text-center   ">
        <h1 className=" md:text-[52px] font-bold font-inter md:px-[180px]   ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </h1>
        <button className="bg-buttonCustomColor px-4  h-[50px] mt-[50px] mb-[50px] rounded-3xl">
          Discover Now
        </button>
      </div>
      <div className="md:px-[120px] px-4 flex flex-col md:flex-row justify-between items-center gap-11">
        <div className="md:self-end">
          <img
            className="w-full md:max-w-[373px] h-auto md:h-[407px]"
            src="https://i.ibb.co/TM0bFP4/Rectangle-17.png"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-full md:max-w-[365px] h-auto md:h-[485px]"
            src="https://i.ibb.co/0hst4Zq/Rectangle-15.png"
            alt=""
          />
        </div>
        <div className="md:self-end">
          <img
            className="w-full md:max-w-[373px] h-auto md:h-[407px]"
            src="https://i.ibb.co/qR8RZtw/Rectangle-16.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Visual;
