import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const LINKS = [
    {
      title: "firstColsLinks",
      links: [
        { name: "FAQ", to: "/" },
        { name: "Invester Relations", to: "/" },
        { name: "Privacy", to: "/" },
        { name: "Speed Test", to: "/" },
      ],
    },
    {
      title: "secondColsLinks",
      links: [
        { name: "Help Center", to: "/" },
        { name: "Jobs", to: "/" },
        { name: "Cookie Preferences", to: "/" },
        { name: "Legal Notices", to: "/" },
      ],
    },
    {
      title: "thirdColsLinks",
      links: [
        { name: "Account", to: "/" },
        { name: "Ways to Watch", to: "/" },
        { name: "Corporate Information", to: "/" },
        { name: "Only on Netflix", to: "/" },
      ],
    },
    {
      title: "fourthColsLinks",
      links: [
        { name: "Media Center", to: "/" },
        { name: "Terms of Use", to: "/" },
        { name: "Contact Us", to: "/" },
      ],
    },
  ];

  return (
    <section className="w-[100%] border-t-[10px] border-[rgba(35,35,35)] bg-black text-gray-400">
      <div className="px-20 py-12">
        <div>
          <h1 className="underline md:px-[70px] sm:px-[40px] px-[20px] font-bold pt-[20px] md:text-2xl text-md">
            Questions? Contact us
          </h1>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 sm:pr-[150px] md:text-2xl text-md">
          {LINKS.map((column, index) => (
            <div key={index} className="underline md:px-[70px] sm:px-[40px] px-[20px] pt-[10px]">
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <Link to={link.to} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="languages sm:px-[70px] px-[15px] relative pt-[20px]">
          <select
            name=""
            id=""
            className="bg-[rgba(0,0,0)] border-[2px] border-gray-800 px-[25px] py-[6px] rounded-[3px]"
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
          </select>
          <div>
      <FontAwesomeIcon className="absolute top-[52%] sm:left-[6.5%] left-[10%]" icon={faGlobe} color="white" />
    </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
