import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { ImBackward } from "react-icons/im";

const MasterClass = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-gray-800 text-white">
      <div className="flex justify-between items-center ">
        <div className="max-w-[508px] h-[112px]">
          <h1 className="text-3xl font-bold ">
            Explore and Join Our Exciting Lineup
          </h1>
        </div>
        <div className="max-w-[579px] h-[96px]">
          <p>
            <small>
              Explore a comprehensive list of nearby events conveniently
              accessible on our platform. Users have the opportunity to discover
              a diverse range of events and can seamlessly register directly
              through this dedicated page
            </small>
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="max-w-[386px] mx-auto h-[489px]">
          <img
            className="w-full"
            src="https://i.ibb.co/qyM0Q5p/Card-event.png"
            alt=""
          />
        </div>
        <div className="max-w-[386px] mx-auto h-[489px] ">
          <img
            className="w-full"
            src="https://i.ibb.co/6Bk1s4m/Card-event-1.png"
            alt=""
          />
        </div>
        <div className="max-w-[386px] mx-auto h-[489px]">
          <img
            className="w-full"
            src="https://i.ibb.co/SXB8pxh/Card-event-2.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex text-center">
        <ImBackward /> <IoArrowForwardCircleOutline />
      </div>
    </div>
  );
};

export default MasterClass;
