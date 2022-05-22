import React, { useState } from "react";

export default function Footer() {
  const [data] = useState({
    footerNavList: [
      {
        url: "#",
        name: "Features",
      },
      {
        url: "#",
        name: "Pricing",
      },
      {
        url: "#",
        name: "Contact",
      },
    ],
  });

  return (
    <footer className="bg-very-dark-blue text-white px-5 py-10 md:py-5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <div>
        <img src="/images/logo-bookmark-footer.svg" />
      </div>
      <nav>
        <ul className="uppercase flex flex-col md:flex-row md:space-x-3 text-gray-200 space-y-6 md:space-y-0">
          {data.footerNavList.map((link) => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex space-x-6">
        <a href="#">
          <img src="/images/icon-facebook.svg" />
        </a>
        <a href="#">
          <img src="/images/icon-twitter.svg" />
        </a>
      </div>
    </footer>
  );
}
