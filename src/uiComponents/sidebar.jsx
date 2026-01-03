import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isDark, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`h-screen sidebar overflow-hidden transition-all duration-300 border-r 
        ${
          isDark
            ? "bg-black text-white border-[#ffffff31]"
            : "bg-white text-[#2a2a2a] border-gray-300"
        }
        ${isSidebarOpen ? "w-[250px]" : "w-0"}
      `}
      >
        <ul className="mt-15 space-y-3 px-5 text-sm">
          <Link to="/">
            <li className="cursor-pointer hover:opacity-70 text-[16px] border-b-1 border-[#ffffff31] my-1 pb-2">
              <i class="ri-home-2-line"></i> Home{" "}
            </li>
          </Link>
 
          <Link to="/navbar">
            <li className="cursor-pointer hover:opacity-70 p-2 text-[15px]">
              <i class="ri-menu-line"></i> Navbar
            </li>
          </Link>
          <Link to="/tree">
            <li className="cursor-pointer hover:opacity-70 p-2 text-[15px]">
              <i class="ri-git-branch-line"></i> Tree
            </li>
          </Link>
          <Link to="/comingsoon">
            <li className="cursor-pointer hover:opacity-70 p-2 text-[15px]">
              <i class="ri-arrow-down-s-line"></i> Accordion
            </li>
          </Link>
          <Link to="/comingsoon">
            <li className="cursor-pointer hover:opacity-70 p-2 text-[15px]">
              <i class="ri-alert-line"></i> Alert
            </li>
          </Link>

          <Link to="/comingsoon">
            <li className="cursor-pointer hover:opacity-70 p-2 text-[15px]">
              <i class="ri-account-circle-line"></i> Avatar
            </li>
          </Link>

          <Link to="/comingsoon">
            <li className="cursor-pointer hover:opacity-70 p-2 text-[15px]">
              <i class="ri-price-tag-3-line"></i> Badge
            </li>
          </Link>

          <Link to="/comingsoon">
            <li className="cursor-pointer hover:opacity-70 p-2 text-[15px]">
              <i class="ri-megaphone-line"></i> Banner
            </li>
          </Link>

          <Link to="/comingsoon">
            <li className="cursor-pointer hover:opacity-70 p-2 text-[15px]">
              <i class="ri-corner-up-right-line"></i> Breadcrumb
            </li>
          </Link>

          <Link to="/comingsoon">
            <li className="cursor-pointer hover:opacity-70 p-2 text-[15px]">
              <i class="ri-radio-button-line"></i> Button
            </li>
          </Link>

          <Link to="/comingsoon">
            <li className="cursor-pointer hover:opacity-70 p-2 text-[15px]">
              <i class="ri-archive-drawer-line"></i> Calendar picker
            </li>
          </Link>

          <Link to="/comingsoon">
            <li className="cursor-pointer hover:opacity-70 p-2 text-[15px]">
              <i class="ri-checkbox-circle-line"></i> Checkbox
            </li>
          </Link>
        </ul>
      </div>

      <button
        onClick={sidebarHandler}
        className={`sidebarbtn p-5 cursor-pointer`}
               
      >
        <svg
          width="28px"
          height="28px"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isDark ? "#fff" : "#2a2a2a"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth="1.5" />
          <line x1="9" y1="4" x2="9" y2="20" strokeWidth="1.5" />
        </svg>
      </button>
    </>
  );
};

export default Sidebar;
