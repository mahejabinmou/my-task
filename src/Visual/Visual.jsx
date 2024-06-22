const Visual = () => {
  return (
    <div className="bg-gray-800 p-6 md:p-12 lg:p-[120px]">
      <div className="text-white text-center max-w-[1080px] mx-auto h-auto mb-7">
        <h1 className="pb-7 text-2xl md:text-3xl lg:text-4xl font-bold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </h1>
        <button className="bg-red-600 px-4 py-2 rounded-3xl">
          Discover Now
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
