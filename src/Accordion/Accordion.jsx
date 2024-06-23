import React, { useState } from "react";
import { HiMiniMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";
const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className=" rounded-lg overflow-hidden mb-4 ">
    <button
      onClick={onClick}
      className={` w-full text-left p-4 font-bold flex justify-between items-center ${
        isOpen
          ? "md:px-[110px] md:pt-[40px] bg-buttonCustomColor text-white"
          : "bg-white"
      } transition-colors duration-300`}
    >
      {title}
      {isOpen ? (
        <HiMiniMinusSmall className="text-buttonCustomColor bg-white h-8 w-8 flex items-center justify-center rounded-full" />
      ) : (
        <HiMiniPlusSmall className="text-black bg-circleColor h-8 w-8 flex items-center justify-center rounded-full" />
      )}
    </button>
    <div
      className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <div
        className={`md:px-[110px] md:pb-[40px] font-Poppins text-[18px] font-normal ${
          isOpen ? "bg-buttonCustomColor" : "bg-white"
        }  text-white`}
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
      title: "01 How do I purchase tickets for an event?",
      content:
        "To purchase tickets, simply log in to your account, select the desired event, and follow the purchasing guide. Alternatively, you can purchase tickets without having to create an account first.",
    },
    {
      title: "02 How can I cancel or change my ticket order?",
      content:
        "To cancel or change your ticket order, please contact our support team.",
    },
    {
      title: "03 Are there other payment options besides credit card?",
      content:
        "Yes, we also accept PayPal and other electronic payment methods.",
    },
    {
      title: "04 Can tickets that have been purchased be refunded?",
      content:
        "Refund policies vary depending on the event. Please refer to the event's specific refund policy for details.",
    },
    {
      title: "05 How do I get more information about a specific event?",
      content:
        "You can find more information about specific events on our events page or by contacting our support team.",
    },
    {
      title: "06 What should I do if I lose my ticket?",
      content:
        "If you lose your ticket, please contact our support team to reissue your ticket.",
    },
  ];

  return (
    <div className=" p-4 md:px-[120px] rounded-lg">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Your Guide to Hassle-Free Event Registration
        </h1>
        <p className="text-white">
          <small>
            Provide step-by-step guidance on how to register and get tickets for
            events. Ensure visitors understand the registration process easily
          </small>
        </p>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2">
          {items.slice(0, 3).map((item, index) => (
            <AccordionItem
              key={index}
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
