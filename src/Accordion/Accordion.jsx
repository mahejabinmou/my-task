import React, { useState } from "react";
import { HiMiniMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";

const AccordionItem = ({ number, title, content, isOpen, onClick }) => (
  <div className="rounded-lg overflow-hidden mb-4">
    <button
      onClick={onClick}
      className={`w-full text-left p-4 font-bold flex items-center ${
        isOpen ? "bg-buttonCustomColor text-white" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="flex w-full">
        <div className="w-1/6 flex items-center justify-center">
          <span className="font-semibold text-[32px]">{number}</span>
        </div>
        <div className="w-5/6 flex justify-between items-center">
          <span>{title}</span>
          {isOpen ? (
            <HiMiniMinusSmall className="text-buttonCustomColor bg-white h-8 w-8 flex items-center justify-center rounded-full" />
          ) : (
            <HiMiniPlusSmall className="text-black bg-circleColor h-8 w-8 flex items-center justify-center rounded-full" />
          )}
        </div>
      </div>
    </button>
    <div
      className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <div
        className={`p-4 md:px-[110px] md:pb-[40px] font-Poppins text-[18px] font-normal ${
          isOpen ? "bg-buttonCustomColor" : "bg-white"
        } text-white`}
      >
        {content}
      </div>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set the first item as open by default

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "How do I purchase tickets for an event?",
      content:
        "To purchase tickets, simply log in to your account, select the desired event, and follow the purchasing guide. Alternatively, you can purchase tickets without having to create an account first.",
    },
    {
      title: "How can I cancel or change my ticket order?",
      content:
        "To cancel or change your ticket order, please contact our support team.",
    },
    {
      title: "Are there other payment options besides credit card?",
      content:
        "Yes, we also accept PayPal and other electronic payment methods.",
    },
    {
      title: "Can tickets that have been purchased be refunded?",
      content:
        "Refund policies vary depending on the event. Please refer to the event's specific refund policy for details.",
    },
    {
      title: "How do I get more information about a specific event?",
      content:
        "You can find more information about specific events on our events page or by contacting our support team.",
    },
    {
      title: "What should I do if I lose my ticket?",
      content:
        "If you lose your ticket, please contact our support team to reissue your ticket.",
    },
  ];

  return (
    <div className="p-4 md:px-[120px] rounded-lg">
      <div className="text-center ">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Your Guide to Hassle-Free Event Registration
        </h1>
        <p className="px-[294px] text-white text-[16px] pt-[20px] text-center pb-[52px]">
          Provide step-by-step guidance on how to register and get tickets for
          events. Ensure visitors understand the registration process easily
        </p>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2">
          {items.slice(0, 3).map((item, index) => (
            <AccordionItem
              key={index}
              number={`0${index + 1}`}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2 px-2">
          {items.slice(3).map((item, index) => (
            <AccordionItem
              key={index + 3}
              number={`0${index + 4}`}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index + 3}
              onClick={() => handleItemClick(index + 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
