const ExploreMassart = () => {
  return (
    <div className=" md:px-[120px] md:pt-[150px] text-white">
      <div className="md:pb-[16px] ">
        <h1 className="text-2xl md:text-3xl font-bold">
          More Explore in Massart
        </h1>
        <p className="mt-2 text-sm md:text-textColor text-[16px] font-normal font-inter">
          Exclusive Content You Can Access
        </p>
      </div>

      <div className="flex flex-wrap md:pb-[37px]  gap-3 mb-6">
        <button className="bg-buttonCustomColor p-2 text-white">
          Original Videos
        </button>
        <button className=" p-2">Born Today</button>
        <button className=" p-2">Top News</button>
        <button className=" p-2">Editors Choice</button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className=" md:w-[548px] md:h-[622px]">
          <div className="relative">
            <img
              src="https://i.ibb.co/BGy4fgX/picture.png"
              alt=""
              className=""
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2F2E2E] to-[#2F2E2E00] p-4">
              <button className="bg-gradColor mb-2">Interview</button>
              <p className="text-[24px] font-inter font-normal text-white">
                On Set with the Stars: Getting to Know the Cast of Eleanor’s
                Night
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-[302px] md:h-[277px]">
              <img
                src="https://i.ibb.co/72tvRVs/picture-1.png"
                alt=""
                className="pb-2"
              />
              <p className=" text-[18px] font-medium font-inter ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="md:w-[302px] md:h-[277px] ">
              <img
                src="https://i.ibb.co/8zQQ3B7/picture-2.png"
                alt=""
                className="pb-2"
              />
              <p className=" text-[18px] font-medium font-inter">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="md:w-[302px] md:h-[277px]">
              <img
                src="https://i.ibb.co/PCmvX3P/picture-3.png"
                alt=""
                className="pb-2"
              />
              <p className=" text-[18px] font-medium font-inter">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="md:w-[302px] md:h-[277px]">
              <img
                src="https://i.ibb.co/30vXpjp/picture-4.png"
                alt=""
                className="pb-2"
              />
              <p className="mt-2 text-[18px] font-medium font-inter">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-7 mt-6 ">
        <div className="relative w-full md:w-[45%] lg:w-[23%]">
          <img
            src="https://i.ibb.co/QcTHFVd/picture-6.png"
            alt=""
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 p-4 text-white ">
            <button className="bg-gradColor bg-opacity-50 py-1 px-2 rounded-lg">
              Interview
            </button>
          </div>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="relative w-full md:w-[45%] lg:w-[23%]">
          <img
            src="https://i.ibb.co/XXjYh7v/picture-7.png"
            alt=""
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 p-4 text-white ">
            <button className="bg-gradColor bg-opacity-50 py-1 px-2 rounded-lg">
              Interview
            </button>
          </div>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="relative w-full md:w-[45%] lg:w-[23%]">
          <img
            src="https://i.ibb.co/QrLvbLk/picture-8.png"
            alt=""
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 p-4 text-white ">
            <button className="bg-gradColor bg-opacity-50 py-1 px-2 rounded-lg">
              Interview
            </button>
          </div>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="relative w-full md:w-[45%] lg:w-[23%]">
          <img
            src="https://i.ibb.co/52cr68L/picture-9.png"
            alt=""
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 p-4 text-white ">
            <button className="bg-gradColor bg-opacity-50 py-1 px-2 rounded-lg">
              Interview
            </button>
          </div>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreMassart;
