import React from "react";

const DummySection = () => {
  return (
    <div className="bg-gray-800 flex flex-col items-center justify-center py-8 ">
      <div className="max-w-[1200px] w-full mx-auto ">
        <div className="flex flex-col items-center mb-6">
          <h1 className="md:text-4xl font-bold text-white text-center">
            Lorem Ipsum is simply dummy
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 ">
          <div className="self-center md:self-end ">
            <img
              className="max-w-full md:max-w-[384px] h-auto md:h-[519px]"
              src="https://i.ibb.co/F8mcvH3/Card-1.png"
              alt=""
            />
          </div>
          <div className="self-center">
            <img
              className="max-w-full md:max-w-[384px] h-auto md:h-[519px]"
              src="https://i.ibb.co/2MbcNMV/Card-2.png"
              alt=""
            />
          </div>
          <div className="self-center md:self-end">
            <img
              className="max-w-full md:max-w-[384px] h-auto md:h-[519px]"
              src="https://i.ibb.co/cJsW2dY/Card-3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummySection;
