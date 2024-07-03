import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item my-2">
      <div
        className="question cursor-pointer sm:text-2xl text-md font-sans bg-[rgb(45,45,45)] hover:bg-[rgba(255,255,255,0.3)] sm:p-[30px] p-[10px] relative text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1>{question}</h1>
        <span className="absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl">
          {isOpen ? '−' : '+'}
        </span>
      </div>
      <div
        className={`answer overflow-hidden transition-all duration-500 bg-[rgb(45,45,45)] sm:text-xl text-md mt-[1px] ${
          isOpen ? 'max-h-screen pl-[10px] sm:py-[40px] py-[20px]' : 'max-h-0'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQItem;
