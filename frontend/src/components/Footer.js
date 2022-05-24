import React from "react";

export default function Footer({ footer }) {
  footer = footer[0];
  return (
    <footer className="bg-very-dark-blue footer text-white px-5 py-10 md:py-5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <div>
        <img src={footer.logo} />
      </div>
      <nav>
        <ul className="uppercase flex flex-col md:flex-row md:space-x-3 text-gray-200 space-y-6 md:space-y-0">
          {footer.links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex space-x-6">
        {footer.socialLinks.map((link) => (
          <a key={link.id} href={link.url}>
            <img src={link.icon} />
          </a>
        ))}
      </div>
    </footer>
  );
}
