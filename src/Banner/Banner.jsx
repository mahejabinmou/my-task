const Banner = () => {
  return (
    <div
      className="banner-container "
      style={{
        backgroundImage:
          "linear-gradient(to bottom left, #12161700 0%, #121617 100%),url(https://i.ibb.co/Cw184YM/image.png)",
        backgroundSize: "cover", // Cover ensures the image covers the container
        backgroundPosition: "center",

        height: "778px", // Set height of the container
      }}
    >
      <div className="flex flex-col items-start justify-center md:pr-[600px]  h-full max-w-[1150px] mx-auto text-white">
        <div className="mb-6">
          <h1 className="text-5xl">Witness The World’s Biggest</h1>
          <p className="pt-5 pb-5">
            Durga Puja is technically West Bengal’s largest religious festival,
            centered on the goddess Durga, destroyer of the demon Mahishasura.
            But increasingly, Durga Puja is also the world’s largest publicly
            funded art show.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 justify-center items-center font-bold">
          <button className="bg-red-600 px-4 py-2 rounded-3xl text-white text-lg font-poppins mb-4 sm:mb-0">
            Get Ticket
          </button>
          <div className="flex space-x-2 items-center mb-4 sm:mb-0">
            <p>view more</p>
            <p>
              <img
                src="https://i.ibb.co/q0WVVDF/fast-forward.png"
                alt="fast-forward"
              />
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            <p>view more</p>
            <p>
              <img
                src="https://i.ibb.co/q0WVVDF/fast-forward.png"
                alt="fast-forward"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
