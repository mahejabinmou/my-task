const Gallery = () => {
  return (
    <div className=" px-4  md:px-[120px] md:pt-[150px] text-white">
      <div className="flex flex-col md:pb-[52px] gap-[445px] md:flex-row justify-between items-center ">
        <div className="md:w-[186px] h-auto  ">
          <h1 className="text-5xl font-semibold font-Inter">Gallery</h1>
        </div>
        <div className=" md:w-[579px] h-auto">
          <p className="text-[16px] font-normal font-Inter">
            "Find Togetherness and Friendship in Every Corner of Our Events"
            depicts moments of closeness and a sense of brotherhood that exist
            during our events. These photos show how shared experiences can
            create lasting relationships.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  gap-[30px]">
        <div>
          <div className="max-w-full md:max-w-[605px] h-auto pb-[30px]">
            <img
              src="https://i.ibb.co/CtpKL8W/Frame-706122.png"
              alt=""
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-[30px]">
            <div className=" md:max-w-[288px] h-auto">
              <img
                src="https://i.ibb.co/PZ1dtSq/Frame-706122-1.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
            <div className=" md:max-w-[288px] h-auto">
              <img
                src="https://i.ibb.co/HhXLvfW/Frame-706122-2.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="max-w-full md:max-w-[565px] h-auto">
          <img
            src="https://i.ibb.co/Y0YYYrb/Frame-706122-3.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
