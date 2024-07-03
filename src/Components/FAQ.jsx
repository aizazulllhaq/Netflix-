import React from "react";
import FAQItem from "./FAQItems";

const FAQ = () => {
  const faqData = [
    {
      question: "What is Netflix?",
      answer: (
        <>
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
          </p>
          <br />
          <p>
            You can watch as much as you want, whenever you want without a
            single commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!
          </p>
        </>
      ),
    },
    {
      question: "How much does Netflix cost ?",
      answer: (
        <>
          <p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from Rs
            250 to Rs 1,100 a month. No extra costs, no contracts.
          </p>
        </>
      ),
    },
    {
      question: "Where can i watch ?",
      answer: (
        <>
          <p>
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles.
          </p>
          <br />
          <p>
            You can also download your favorite shows with the iOS or Android
            app. Use downloads to watch while you're on the go and without an
            internet connection. Take Netflix with you anywhere.
          </p>
        </>
      ),
    },
    {
      question: "How do i cancel ?",
      answer: (
        <>
          <p>
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </p>
        </>
      ),
    },
    {
      question: "What can i watch on Netflix ?",
      answer: (
        <>
          <p>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </p>
        </>
      ),
    },
    {
      question: "Is Netflix good for kids?",
      answer: (
        <>
          <p>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space.
          </p>
          <br />
          <p>
            Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block
            specific titles you don’t want kids to see.
          </p>
        </>
      ),
    },
    // Add more FAQ items here
  ];

  return (
    <section className="w-[100%] bg-black border-t-2 border-gray-500 pb-[70px]">
      <div className="py-12">
        <div className="heading text-white">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-extrabold text-center pt-16 pb-10">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="max-w-[1000px] mx-auto sm:px-[10px] md:px-[30px] px-[20px] text-white">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      <div className="text-white text-center">
      <p className="sm:text-xl text-md pb-[20px] font-semibold px-[20px]">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="max-w-[700px] mx-auto px-[20px]">
          <form action="" className="flex justify-center sm:flex-nowrap flex-wrap">
            <input type="search" className="text-md w-[400px] h-[60px] px-[10px] bg-[rgba(0,0,0,0.6)] border-[1px] border-gray-600 mr-[10px] sm:mb-0 mb-[10px]" placeholder="Email Address" />
            <button className="px-[30px] py-[10px] bg-red-700 font-bold rounded-md">{"Get Started >"}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
