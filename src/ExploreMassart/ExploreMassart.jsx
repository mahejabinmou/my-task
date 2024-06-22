const ExploreMassart = () => {
  return (
    <div className="bg-gray-800 max-w-[1200px] mx-auto p-6 md:p-20 lg:p-[10px]  text-white">
      <div className="pb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          More Explore in Massart
        </h1>
        <p className="mt-2 text-sm md:text-base">
          <small>Exclusive Content You Can Access</small>
        </p>
      </div>

      <div>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button className="bg-red-600 p-2">Original Videos</button>
          <button className="bg-gray-600 p-2">Born Today</button>
          <button className="bg-gray-600 p-2">Top News</button>
          <button className="bg-gray-600 p-2">Editors Choice</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 lg:max-w-[548px]">
          <img
            src="https://i.ibb.co/BGy4fgX/picture.png"
            alt=""
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <img
                src="https://i.ibb.co/72tvRVs/picture-1.png"
                alt=""
                className="w-full h-auto"
              />
              <p className="mt-2 text-sm">
                <small>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://i.ibb.co/8zQQ3B7/picture-2.png"
                alt=""
                className="w-full h-auto"
              />
              <p className="mt-2 text-sm">
                <small>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <img
                src="https://i.ibb.co/PCmvX3P/picture-3.png"
                alt=""
                className="w-full h-auto"
              />
              <p className="mt-2 text-sm">
                <small>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://i.ibb.co/30vXpjp/picture-4.png"
                alt=""
                className="w-full h-auto"
              />
              <p className="mt-2 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-7 mt-6 ">
        <div className="w-full md:w-[45%] lg:w-[23%]">
          <img
            src="https://i.ibb.co/RyqHBcM/Group-1171274740.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-[45%] lg:w-[23%]">
          <img
            src="https://i.ibb.co/GsC4Nsy/Group-1171274739.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-[45%] lg:w-[23%]">
          <img
            src="https://i.ibb.co/pdqF6Sr/Group-1171274737.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-[45%] lg:w-[23%]">
          <img
            src="https://i.ibb.co/7r6xVgS/Group-1171274738.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreMassart;
