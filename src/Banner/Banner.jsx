import { IoMdFastforward } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="banner-container "
      style={{
        backgroundImage:
          "linear-gradient(to bottom left, #12161700 0%, #121617 100%),url(https://i.ibb.co/Cw184YM/image.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 778,
      }}
    >
      <div className=" flex flex-col h-[286px]  md:pl-[120px]  md:pr-[510px] md:pt-[236px] md:pb-[256px]    text-white">
        <h1 className="text-[92px] font-bold font-inter leading-[100px]">
          Witness The World’s Biggest
        </h1>
        <p className="pt-[14px] pb-[30px] text-[16px] font-inter font-normal text-customColor">
          Durga Puja is technically West Bengal’s largest religious festival,
          centered on the goddess Durga, destroyer of the demon Mahishasura. But
          increasingly, Durga Puja is also the world’s largest publicly funded
          art show.
        </p>

        <div className="flex flex-col w-full sm:flex-row space-x-0 sm:space-x-6 items-center font-bold">
          <button className="bg-red-600 px-4 py-2 rounded-3xl text-white text-lg font-poppins mb-4 sm:mb-0">
            Get Ticket
          </button>
          <div className="flex space-x-2 items-center mb-4 sm:mb-0">
            <p>view more</p>
            <a href="/">
              <IoMdFastforward />
            </a>
          </div>
          <div className="flex space-x-2 items-center">
            <p>view more</p>
            <a href="/">
              <IoMdFastforward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
