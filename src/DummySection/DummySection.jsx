import React from "react";

const DummySection = () => {
  return (
    <div className="   flex flex-col items-center justify-center mt-[150px] ">
      <div className=" flex flex-col items-center mb-6">
        <h1 className="md:text-[52px] font-bold font-inter text-center  md:px-[388px]  md:mb-[64px]  text-white ">
          Lorem Ipsum is simply dummy
        </h1>
      </div>

      <div className="md:px-[120px] flex flex-col md:flex-row justify-center items-center gap-6 ">
        <div className="self-center md:self-end ">
          <img
            className=" md:w-[384px] h-auto md:h-[519px]"
            src="https://i.ibb.co/F8mcvH3/Card-1.png"
            alt=""
          />
        </div>
        <div className="self-center">
          <img
            className=" md:w-[384px] h-auto md:h-[519px]"
            src="https://i.ibb.co/2MbcNMV/Card-2.png"
            alt=""
          />
        </div>
        <div className="self-center md:self-end">
          <img
            className=" md:w-[384px] h-auto md:h-[519px]"
            src="https://i.ibb.co/cJsW2dY/Card-3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DummySection;
