import React, { useState } from "react";

const events = [
  {
    date: "20 Jan",
    image: "https://i.ibb.co/F8mcvH3/Card-1.png",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20 Jan",
    image: "https://i.ibb.co/2MbcNMV/Card-2.png",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20 Jan",
    image: "https://i.ibb.co/cJsW2dY/Card-3.png",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20 Jan",
    image: "https://i.ibb.co/F8mcvH3/Card-1.png",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20 Jan",
    image: "https://i.ibb.co/2MbcNMV/Card-2.png",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length
    );
  };

  return (
    <div className=" md:pb-[150px]  p-4 md:px-[120px] ">
      <div className="flex flex-col md:flex-row justify-between md:pb-[57px] items-center gap-4 mb-6">
        <h2 className="md:w-[508px] text-5xl font-semibold font-Inter text-white">
          Explore and Join Our Exciting Lineup
        </h2>
        <p className="md:w-[567px] text-[16px] font-normal font-Poppins text-white">
          Explore a comprehensive list of nearby events conveniently accessible
          on our platform. Users have the opportunity to discover a diverse
          range of events and can seamlessly register directly through this
          dedicated page.
        </p>
      </div>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex * 100) / 3}%)`,
            }}
          >
            {events.map((event, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2"
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-buttonCustomColor text-white text-sm px-2 py-1 rounded z-10">
                      {event.date}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-400">{event.author}</p>
                    <p className="text-gray-400 flex items-center">
                      <svg
                        className="h-4 w-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9c-.78.78-2.047.78-2.828 0l-4.243-4.243a2 2 0 010-2.828l4.243-4.243m1.414-1.414L16.95 7.05a2 2 0 012.828 0l4.243 4.243a2 2 0 010 2.828l-4.243 4.243M7.05 16.95a2 2 0 000-2.828L2.808 11.879a2 2 0 000-2.828L7.05 4.808m5.657-1.414L8.464 2.464A2 2 0 016.343 2H3.464a2 2 0 00-2 2v2.879c0 .53.21 1.04.586 1.414l4.243 4.243"
                        ></path>
                      </svg>
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute md:pt-[50px] inset-x-0 -bottom-16 flex justify-center mb-4">
          <button
            onClick={prevSlide}
            className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full mx-2"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="bg-buttonCustomColor text-white h-10 w-10 flex items-center justify-center rounded-full mx-2"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
