import React, { useState } from "react";
import logo from "./assets/adidas-logo.jpg";  


const navBarComponent = [
  {
    name: "MEN",
    submenu: [
      {
        title: "FEATURED",
        items: ["1", "2", "3", "4", "5"],
      },
      {
        title: "SHOES",
        items: ["Shoes", "Clothing"],
      },
      {
        title: "CLOTHING",
        items: ["Shoes", "Clothing", "Accessories", "Trae Young"],
      },
      {
        title: "ACCESSORIES",
        items: ["Shoes", "Clothing"],
      },
      {
        title: "SPORTS",
        items: ["Shoes", "Clothing", "Accessories"],
      },
      {
        title: "ADDIDAS SAMBA COLLECTION",
        items: ["Terrex", "Shoes", "Clothing"],
      },
    ],
  },
  {
    name: "WOMEN",
    submenu: [
      {
        title: "SPORTS",
        items: ["Shoes", "Clothing", "Accessories"],
      },
      {
        title: "ADDIDAS SAMBA COLLECTION",
        items: ["Terrex", "Shoes", "Clothing"],
      },
    ],
  },
  { name: "KIDS", submenu: [] },
  { name: "SPORTS", submenu: [] },
  { name: "BRANDS", submenu: [] },
  { name: "NEW ARRIVALS", submenu: [] },
  { name: "OUTLET", submenu: [] },
];

const NavBar = ({ onHover }) => {
  return (
    <div className="fixed bg-white flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60 text-black shadow-lg z-10 w-[90%]">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      {/* Menu Links */}
      <ul className="flex gap-8 text-lg font-bold">
        {navBarComponent.map((item) => (
          <li
            className="relative group cursor-pointer"
            key={item.name}
            onMouseEnter={() => onHover(item.name)}
          >
            {item.name}
            <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-x1 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Search and Icons */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75 21 21m-9 0a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none bg-transparent"
          />
        </div>

        {/* Icons */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer relative"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
          <span className="absolute -top-1 -right-2 bg-yellow-500 text-xs text-black rounded-full w-4 h-4 text-center">
            1
          </span>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

const Menu = ({ activeMenu, onHover, onLeave }) => {
  const activeSubMenu = navBarComponent.find(
    (menu) => menu.name === activeMenu
  );

  if (!activeSubMenu || activeSubMenu.submenu.length === 0) return null;

  return (
    <div
      className="absolute left-0 top-[80px] bg-slate-400 text-black z-20 p-6 w-full shadow-lg rounded-lg"
      onMouseEnter={() => onHover(activeMenu)}
      onMouseLeave={onLeave}
    >
      <div className="flex justify-center gap-16">
        {activeSubMenu.submenu.map((submenu, index) => (
          <div key={index} className="text-center">
            <h3 className="font-bold text-lg mb-2">{submenu.title}</h3>
            <ul>
              {submenu.items.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="py-1 hover:text-blue-500 cursor-pointer"
                >
                  {subItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const NavBarWithMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <NavBar onHover={handleMouseEnter} />
      <Menu
        activeMenu={activeMenu}
        onHover={handleMouseEnter}
        onLeave={handleMouseLeave}
      />
    </>
  );
};

export default NavBarWithMenu;
