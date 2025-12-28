import React, { useState } from "react";
import CodePopup from "./CodePopup";
import { Search, Github, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

const Navbar = ({ isDark, toggleTheme }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentCode, setCurrentCode] = useState("");

  const navbar1Code = `
        <nav className="bg-black text-white px-6 py-4 flex justify-between w-[100%] items-center">
              {/* Logo */}
            <h1 className="text-2xl font-bold tracking-wide">MyBrand</h1>
              {/* Nav Links */}
              <ul className="flex gap-6 text-sm">
                  <li className="hover:text-gray-400 cursor-pointer transition">
                  Home
                  </li>
                  <li className="hover:text-gray-400 cursor-pointer transition">
                  About
                  </li>
                  <li className="hover:text-gray-400 cursor-pointer transition">
                  Services
                  </li>
                  <li className="hover:text-gray-400 cursor-pointer transition">
                  Contact
                  </li>
              </ul>
              {/* Button */}
              <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition">
                Login
              </button>
        </nav>`;

  const navbar2Code = `
  <nav className="bg-black text-white px-8 py-4 w-[100%] flex justify-between items-center">
              <h1 className="text-2xl font-bold">MyBrand</h1>
              <ul className="flex gap-6">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <li
                    key={item}
                    className="relative cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition">
                Get Started
              </button>
            </nav>`;

  const navbar3Code = `
 <nav className="bg-black text-white px-6 py-4 flex w-[100%] justify-between items-center">
              <h1 className="text-xl font-semibold">MyBrand</h1>

              <div className="flex items-center gap-6">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border border-gray-500 px-3 py-1 rounded-md focus:outline-none focus:border-white"
                />
                <ul className="flex gap-5">
                  <li className="hover:text-gray-400 cursor-pointer">Home</li>
                  <li className="hover:text-gray-400 cursor-pointer">Blog</li>
                  <li className="hover:text-gray-400 cursor-pointer">
                    Contact
                  </li>
                </ul>
              </div>
            </nav>`;

  const navbar4Code = `
 <nav className="bg-black text-white px-10 w-[100%] py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">MyBrand</h1>
              <ul className="flex gap-8">
                {["Home", "About", "Services", "Portfolio"].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer text-gray-500 hover:text-white hover:scale-120 transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
                Join Now
              </button>
            </nav>`;

  const navbar5Code = `
  <nav className="bg-black text-white px-10 w-[100%] py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">MyBrand</h1>
              <ul className="flex gap-8">
                {["Home", "About", "Services", "Portfolio"].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer text-gray-500 hover:text-white hover:scale-120 transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
                Join Now
              </button>
            </nav>`;

  const navbar6Code = `
  <nav className="bg-black text-white px-10 py-4 w-[100%] flex justify-between items-center">
              <h1 className="text-2xl font-bold tracking-widest">MyBrand</h1>

              <ul className="flex gap-6">
                {["Home", "Features", "Pricing", "Docs"].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-200">
                Get Started
              </button>
            </nav>`;

  const handleSeeCode = (code) => {
    setCurrentCode(code);
    setShowPopup(true);
  };

  
  return (
    <>
      <nav
        className={`${
          isDark ? "bg-[#000] border-gray-700" : "bg-white border-gray-200"
        } border-b`}
      >
        <div className="max-w-7xl mx-auto cursor-pointer px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left - Logo */}
            <Link to={"/"}>
              <div
                style={{ fontFamily: "cal sans, sans-serif" }}
                className={`text-[28px] ${
                  isDark ? "text-[#eee]" : "text-[#222]"
                }`}
              >
                Sutra.<span className="text-[#8E8E95]">com</span>
              </div>
            </Link>

            {/* Right - Search, GitHub, Theme Toggle */}
            <div className="flex items-center space-x-4">
              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search
                    className={`h-5 w-5 ${
                      isDark ? "text-gray-500" : "text-gray-500"
                    }`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Ctrl+K"
                  className={`${
                    isDark
                      ? "bg-[#111] border-gray-600 text-white placeholder-gray-400"
                      : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                  } pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700 w-48`}
                />
              </div>

              {/* GitHub Button */}
              <a
                href="https://github.com/MOHIT-GITHUB-18/sutra.com-ui"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDark
                    ? "bg-[#222] hover:text-gray-400 text-gray-500"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                } p-2 rounded-lg cursor-pointer`}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleTheme}
                className={`${
                  isDark
                    ? "bg-[#222] hover:text-gray-400 text-gray-500"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                } p-2 rounded-lg cursor-pointer`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex">
        <Sidebar isDark={isDark} toggleTheme={toggleTheme}/>
        <div
          className={`w-[100vw] navbarMain  ${
            isDark ? "bg-[#000] text-[#fff]" : "bg-[#fff] text-[#111]"
          } flex items-center flex-col p-10`}
        >
          <div className="topContent w-[100%] flex flex-col items-center justify-center">
            <h1
              style={{ fontFamily: "cal sans, sans-serif" }}
              className=" text-[5vw]"
            >
              Navbar
            </h1>
            <p
              className={`${isDark ? "text-[#dddddda5]" : "text-[#2b2b2ba5]"}`}
            >
              A growing collection of 6 navbar components built with React and
              Tailwind CSS.
            </p>
          </div>

          <div
            className={`navbarComponent border-1 mt-10 rounded-lg ${
              isDark ? "border-[#ffffff31]" : "border-[#00000031]"
            } w-[100%] p-5 py-10`}
          >
            <div
              className={`navbar-1 mb-5 border-1 ${
                isDark ? "border-[#ffffff31]" : " border-[#0808082d]"
              } rounded-lg w-[100%] h-[200px] flex items-end justify-center p-5 flex-col`}
            >
              <div className="relative group inline-block">
                <div
                  onClick={() => handleSeeCode(navbar1Code)}
                  className={`navbar-1-code mb-5 ${
                    isDark
                      ? "bg-[#00000062] border-[#e6e6e64f]"
                      : "bg-[#ebebebad] border-[#00000031]"
                  } p-2 px-3 border rounded-lg cursor-pointer text-2xl`}
                >
                  <i className="ri-code-s-slash-line"></i>
                </div>

                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
  text-sm bg-[#111111] border border-[#ffffff31] select-none text-white px-2 py-1 rounded 
  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 w-[100px] flex items-center justify-center"
                >
                  See Code
                </span>
              </div>
              <nav className="bg-black text-white px-6 py-4 flex justify-between w-[100%] items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wide">MyBrand</h1>

                {/* Nav Links */}
                <ul className="flex gap-6 text-sm">
                  <li className="hover:text-gray-400 cursor-pointer transition">
                    Home
                  </li>
                  <li className="hover:text-gray-400 cursor-pointer transition">
                    About
                  </li>
                  <li className="hover:text-gray-400 cursor-pointer transition">
                    Services
                  </li>
                  <li className="hover:text-gray-400 cursor-pointer transition">
                    Contact
                  </li>
                </ul>

                {/* Button */}
                <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition">
                  Login
                </button>
              </nav>
            </div>

            <div
              className={`navbar-2 mb-5 border-1 ${
                isDark ? "border-[#ffffff31]" : "border-[#0808082d]"
              } rounded-lg w-[100%] h-[200px] flex items-end justify-center p-5 flex-col`}
            >
              <div className="relative group inline-block">
                <div
                  onClick={() => handleSeeCode(navbar2Code)}
                  className={`navbar-1-code mb-5 ${
                    isDark
                      ? "bg-[#00000062] border-[#e6e6e64f]"
                      : "bg-[#ebebebad] text-[#131313] border-[#00000031]"
                  } p-2 px-3 border rounded-lg cursor-pointer text-2xl`}
                >
                  <i className="ri-code-s-slash-line"></i>
                </div>

                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
  text-sm bg-[#111111] border border-[#ffffff31] select-none text-white px-2 py-1 rounded 
  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 w-[100px] flex items-center justify-center"
                >
                  See Code
                </span>
              </div>
              <nav className="bg-black text-white px-8 py-4 w-[100%] flex justify-between items-center">
                <h1 className="text-2xl font-bold">MyBrand</h1>
                <ul className="flex gap-6">
                  {["Home", "About", "Projects", "Contact"].map((item) => (
                    <li
                      key={item}
                      className="relative cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition">
                  Get Started
                </button>
              </nav>
            </div>

            <div
              className={`navbar-3 mb-5 border-1 ${
                isDark ? "border-[#ffffff31]" : "border-[#0808082d]"
              } rounded-lg w-[100%] h-[200px] flex items-end justify-center p-5 flex-col`}
            >
              <div className="relative group inline-block">
                <div
                  onClick={() => handleSeeCode(navbar3Code)}
                  className={`navbar-1-code mb-5 ${
                    isDark
                      ? "bg-[#00000062] border-[#e6e6e64f]"
                      : "bg-[#ebebebad] border-[#00000031]"
                  } p-2 px-3 border rounded-lg cursor-pointer text-2xl`}
                >
                  <i className="ri-code-s-slash-line"></i>
                </div>

                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
  text-sm bg-[#111111] border border-[#ffffff31] select-none text-white px-2 py-1 rounded 
  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 w-[100px] flex items-center justify-center"
                >
                  See Code
                </span>
              </div>
              <nav className="bg-black text-white px-6 py-4 flex w-[100%] justify-between items-center">
                <h1 className="text-xl font-semibold">MyBrand</h1>

                <div className="flex items-center gap-6">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent border border-gray-500 px-3 py-1 rounded-md focus:outline-none focus:border-white"
                  />
                  <ul className="flex gap-5">
                    <li className="hover:text-gray-400 cursor-pointer">Home</li>
                    <li className="hover:text-gray-400 cursor-pointer">Blog</li>
                    <li className="hover:text-gray-400 cursor-pointer">
                      Contact
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div
              className={`navbar-4 mb-5 border-1 ${
                isDark ? "border-[#ffffff31]" : "border-[#0808082d]"
              } rounded-lg w-[100%] h-[200px] flex items-end justify-center p-5 flex-col`}
            >
              <div className="relative group inline-block">
                <div
                  onClick={() => handleSeeCode(navbar4Code)}
                  className={`navbar-1-code mb-5 ${
                    isDark
                      ? "bg-[#00000062] border-[#e6e6e64f]"
                      : "bg-[#ebebebad] border-[#00000031]"
                  } p-2 px-3 border rounded-lg cursor-pointer text-2xl`}
                >
                  <i className="ri-code-s-slash-line"></i>
                </div>

                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
  text-sm bg-[#111111] border border-[#ffffff31] select-none text-white px-2 py-1 rounded 
  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 w-[100px] flex items-center justify-center"
                >
                  See Code
                </span>
              </div>
              <nav className="bg-black text-white px-10 w-[100%] py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">MyBrand</h1>
                <ul className="flex gap-8">
                  {["Home", "About", "Services", "Portfolio"].map((item) => (
                    <li
                      key={item}
                      className="cursor-pointer text-gray-500 hover:text-white hover:scale-120 transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
                  Join Now
                </button>
              </nav>
            </div>

            <div
              className={`navbar-5 mb-5 border-1 ${
                isDark ? "border-[#ffffff31]" : "border-[#0808082d]"
              } rounded-lg w-[100%] h-[200px] flex items-end justify-center p-5 flex-col`}
            >
              <div className="relative group inline-block">
                <div
                  onClick={() => handleSeeCode(navbar5Code)}
                  className={`navbar-1-code mb-5 ${
                    isDark
                      ? "bg-[#00000062] border-[#e6e6e64f]"
                      : "bg-[#ebebebad] border-[#00000031]"
                  } p-2 px-3 border rounded-lg cursor-pointer text-2xl`}
                >
                  <i className="ri-code-s-slash-line"></i>
                </div>

                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
  text-sm bg-[#111111] border border-[#ffffff31] select-none text-white px-2 py-1 rounded 
  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 w-[100px] flex items-center justify-center"
                >
                  See Code
                </span>
              </div>
              <nav className="bg-black text-white px-8 w-[100%] py-4 flex justify-between items-center gap-10">
                <h1 className="text-2xl font-bold">MyBrand</h1>
                <ul className="flex gap-8">
                  {["Home", "Gallery", "Team", "Contact"].map((item) => (
                    <li
                      key={item}
                      className="cursor-pointer hover:-translate-y-1 hover:text-gray-300 transition-all duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div
              className={`navbar-6 mb-5 border-1 ${
                isDark ? "border-[#ffffff31]" : "border-[#0808082d]"
              } rounded-lg w-[100%] h-[200px] flex items-end justify-center p-5 flex-col`}
            >
              <div className="relative group inline-block">
                <div
                  onClick={() => handleSeeCode(navbar6Code)}
                  className={`navbar-1-code mb-5 ${
                    isDark
                      ? "bg-[#00000062] border-[#e6e6e64f]"
                      : "bg-[#ebebebad] border-[#00000031]"
                  } p-2 px-3 border rounded-lg cursor-pointer text-2xl`}
                >
                  <i className="ri-code-s-slash-line"></i>
                </div>

                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
  text-sm bg-[#111111] border border-[#ffffff31] select-none text-white px-2 py-1 rounded 
  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 w-[100px] flex items-center justify-center"
                >
                  See Code
                </span>
              </div>
              <nav className="bg-black text-white px-10 py-4 w-[100%] flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-widest">MyBrand</h1>

                <ul className="flex gap-6">
                  {["Home", "Features", "Pricing", "Docs"].map((item) => (
                    <li
                      key={item}
                      className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-200">
                  Get Started
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <CodePopup code={currentCode} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
};
export default Navbar;
