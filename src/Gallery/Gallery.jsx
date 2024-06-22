const Gallery = () => {
  return (
    <div className="bg-gray-800 p-6 md:p-12 lg:p-[120px] text-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="max-w-[186px] h-auto mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">Gallery</h1>
        </div>
        <div className="max-w-full md:max-w-[579px] h-auto">
          <p>
            <small>
              "Find Togetherness and Friendship in Every Corner of Our Events"
              depicts moments of closeness and a sense of brotherhood that exist
              during our events. These photos show how shared experiences can
              create lasting relationships.
            </small>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div>
          <div className="max-w-full md:max-w-[605px] h-auto">
            <img
              src="https://i.ibb.co/CtpKL8W/Frame-706122.png"
              alt=""
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-5">
            <div className="max-w-full md:max-w-[288px] h-auto">
              <img
                src="https://i.ibb.co/PZ1dtSq/Frame-706122-1.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
            <div className="max-w-full md:max-w-[288px] h-auto">
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
