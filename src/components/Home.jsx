import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { Search, Github, Sun, Moon } from "lucide-react";
import Popup from "./Popup";

//light images
import accordionLight from "../assets/accordion.webp";
import alertLight from "../assets/alert.webp";
import avatarLight from "../assets/avatar.webp";
import badgeLight from "../assets/badge.webp";
import bannerLight from "../assets/banner.webp";
import breadcrumbLight from "../assets/breadcrumb.webp";
import buttonLight from "../assets/button-light.png";
import calendarDatePickerLight from "../assets/calendar-date-picker.webp";
import checkboxLight from "../assets/checkbox.png";
import dialogLight from "../assets/dialog.webp";
import dropdownLight from "../assets/dropdown.webp";
import eventCalendarLight from "../assets/event-calendar.webp";
import fileUploadLight from "../assets/file-upload.webp";
import imageCropperLight from "../assets/image-cropper.webp";
import inputLight from "../assets/input.png";
import navbarLight from "../assets/navbar.png";
import notificationLight from "../assets/notification.webp";
import paginationLight from "../assets/pagination.png";
import popoverLight from "../assets/popover.webp";
import radioLight from "../assets/radio.webp";
import selectLight from "../assets/select.png";
import sliderLight from "../assets/slider.png";
import stepperLight from "../assets/stepper.webp";
import switchLight from "../assets/switch.png";
import tableLight from "../assets/table.webp";
import tabsLight from "../assets/tabs.webp";
import textareaLight from "../assets/textarea.webp";
import treeLight from "../assets/tree.webp";

//dark images
import accordionDark from "../assets/accordion-dark.png";
import alertDark from "../assets/alert-dark.png";
import avatarDark from "../assets/avatar-dark.png";
import badgeDark from "../assets/badge-dark.png";
import bannerDark from "../assets/banner-dark.png";
import breadcrumbDark from "../assets/breadcrumb-dark.png";
import buttonDark from "../assets/button-dark.png";
import calendarDatePickerDark from "../assets/calendar-date-picker-dark.webp";
import checkboxDark from "../assets/checkbox-dark.png";
import dialogDark from "../assets/dialog-dark.png";
import dropdownDark from "../assets/dropdown-dark.png";
import eventCalendarDark from "../assets/event-calendar-dark.webp";
import fileUploadDark from "../assets/file-upload-dark.webp";
import imageCropperDark from "../assets/image-cropper-dark.webp";
import inputDark from "../assets/input-dark.png";
import navbarDark from "../assets/navbar-dark.png";
import notificationDark from "../assets/notification-dark.png";
import paginationDark from "../assets/pagination-dark.png";
import popoverDark from "../assets/popover-dark.webp";
import radioDark from "../assets/radio-dark.png";
import selectDark from "../assets/select-dark.png";
import sliderDark from "../assets/slider-dark.png";
import stepperDark from "../assets/stepper-dark.png";
import switchDark from "../assets/switch-dark.webp";
import tableDark from "../assets/table-dark.png";
import tabsDark from "../assets/tabs-dark.png";
import textareaDark from "../assets/textarea-dark.png";
import treeDark from "../assets/tree-dark.webp";

export default function Navbar({ isDark, toggleTheme }) {
  //ctrl+k start
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault(); // stop default browser action
        setShowPopup(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  //ctrl+k end

  return (
    <div
      className={`overflow-x-hidden h-[100vh] w-[100vw] ${
        isDark ? "bg-[#000] text-[#eee]" : "bg-[#fff] text-[#222]"
      }`}
    >
      <nav
        className={`${
          isDark ? "bg-[#000] border-gray-700" : "bg-white border-gray-200"
        } border-b`}
      >
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left - Logo */}
            <Link to={"./"}>
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

      <div className="main p-10 flex flex-col">
        <div className="main-content mb-20">
          <h1 className="text-5xl mt-10 beautiful  font-semibold w-[70%]">
            Beautiful UI components built with Tailwind CSS and React.
          </h1>

          <p
            className={`mt-7 text-xl mb-7 ${
              isDark ? "text-[#dddddd92]" : "text-[#222222a5]"
            }`}
          >
            An open-source collection of copy-and-paste components for quickly
            build application UIs.
          </p>

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
                  ? "bg-[#00000057] border-[#222] text-white placeholder-gray-400"
                  : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
              } w-100 pl-10 pr-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-900`}
            />
          </div>
        </div>

        <div
          className="w-[100%] grid gap-4 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3  
        lg:grid-cols-4 p-4"
        >
          {/* NavBar */}
          <Link to="/navbar">
            <div className="flex items-center justify-center flex-col ">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? navbarDark : navbarLight}
                  alt="Accordion"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                NavBar
              </h2>
              <p className="text-sm text-gray-500">6 Components</p>
            </div>
          </Link>

          {/* Tree */}
          <Link to={"/tree"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? treeDark : treeLight}
                  alt="Accordion"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Tree
              </h2>
              <p className="text-sm text-gray-500">4 Components</p>
            </div>
          </Link>

          {/* Accordion */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? accordionDark : accordionLight}
                  alt="Accordion"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Accordion
              </h2>
              <p className="text-sm text-gray-500">25 Components</p>
            </div>
          </Link>

          {/* Alert */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? alertDark : alertLight}
                  alt="Alert"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Alert
              </h2>
              <p className="text-sm text-gray-500">12 Components</p>
            </div>
          </Link>

          {/* Avatar */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? avatarDark : avatarLight}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Avatar
              </h2>
              <p className="text-sm text-gray-500">14 Components</p>
            </div>
          </Link>

          {/* Badge */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? badgeDark : badgeLight}
                  alt="Badge"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Badge
              </h2>
              <p className="text-sm text-gray-500">21 Components</p>
            </div>
          </Link>

          {/* Banner */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? bannerDark : bannerLight}
                  alt="Banner"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Banner
              </h2>
              <p className="text-sm text-gray-500">16 Components</p>
            </div>
          </Link>

          {/* Breadcrumb */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? breadcrumbDark : breadcrumbLight}
                  alt="Breadcrumb"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Breadcrumb
              </h2>
              <p className="text-sm text-gray-500">13 Components</p>
            </div>
          </Link>

          {/* Button */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? buttonDark : buttonLight}
                  alt="Button"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Button
              </h2>
              <p className="text-sm text-gray-500">35 Components</p>
            </div>
          </Link>

          {/* Calendar & Date picker */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={
                    isDark ? calendarDatePickerDark : calendarDatePickerLight
                  }
                  alt="Calendar & Date picker"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Calendar & Date picker
              </h2>
              <p className="text-sm text-gray-500">12 Components</p>
            </div>
          </Link>

          {/* Checkbox */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? checkboxDark : checkboxLight}
                  alt="Checkbox"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Checkbox
              </h2>
              <p className="text-sm text-gray-500">5 Components</p>
            </div>
          </Link>

          {/* Image Cropper */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? imageCropperDark : imageCropperLight}
                  alt="Image Cropper"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Image Cropper
              </h2>
              <p className="text-sm text-gray-500">10 Components</p>
            </div>
          </Link>

          {/* Dialog */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? dialogDark : dialogLight}
                  alt="Dialog"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Dialog
              </h2>
              <p className="text-sm text-gray-500">12 Components</p>
            </div>
          </Link>

          {/* Dropdown */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? dropdownDark : dropdownLight}
                  alt="Dropdown"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Dropdown
              </h2>
              <p className="text-sm text-gray-500">21 Components</p>
            </div>
          </Link>

          {/* File Upload */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? fileUploadDark : fileUploadLight}
                  alt="File Upload"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                File Upload
              </h2>
              <p className="text-sm text-gray-500">13 Components</p>
            </div>
          </Link>

          {/* Event Calendar */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? eventCalendarDark : eventCalendarLight}
                  alt="Event Calendar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Event Calendar
              </h2>
              <p className="text-sm text-gray-500">16 Components</p>
            </div>
          </Link>

          {/* Input */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? inputDark : inputLight}
                  alt="Input"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Input
              </h2>
              <p className="text-sm text-gray-500">2 Components</p>
            </div>
          </Link>

          {/* Notification */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? notificationDark : notificationLight}
                  alt="Notification"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Notification
              </h2>
              <p className="text-sm text-gray-500">20 Components</p>
            </div>
          </Link>

          {/* Pagination */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? paginationDark : paginationLight}
                  alt="Pagination"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Pagination
              </h2>
              <p className="text-sm text-gray-500">19 Components</p>
            </div>
          </Link>

          {/* Popover */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? popoverDark : popoverLight}
                  alt="Popover"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Popover
              </h2>
              <p className="text-sm text-gray-500">14 Components</p>
            </div>
          </Link>

          {/* Radio */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? radioDark : radioLight}
                  alt="Radio"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Radio
              </h2>
              <p className="text-sm text-gray-500">2 Components</p>
            </div>
          </Link>

          {/* Select */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? selectDark : selectLight}
                  alt="Select"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Select
              </h2>
              <p className="text-sm text-gray-500">15 Components</p>
            </div>
          </Link>

          {/* Slider */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? sliderDark : sliderLight}
                  alt="Slider"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Slider
              </h2>
              <p className="text-sm text-gray-500">20 Components</p>
            </div>
          </Link>

          {/* Stepper */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? stepperDark : stepperLight}
                  alt="Stepper"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Stepper
              </h2>
              <p className="text-sm text-gray-500">21 Components</p>
            </div>
          </Link>

          {/* Switch */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? switchDark : switchLight}
                  alt="Switch"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Switch
              </h2>
              <p className="text-sm text-gray-500">10 Components</p>
            </div>
          </Link>

          {/* Table */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? tableDark : tableLight}
                  alt="Table"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Table
              </h2>
              <p className="text-sm text-gray-500">20 Components</p>
            </div>
          </Link>

          {/* Tabs */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? tabsDark : tabsLight}
                  alt="Tabs"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Tabs
              </h2>
              <p className="text-sm text-gray-500">25 Components</p>
            </div>
          </Link>

          {/* Textarea */}
          <Link to={"/comingsoon"}>
            <div className="flex items-center justify-center flex-col">
              <div
                className={`w-[268px] h-[198px] overflow-hidden ${
                  isDark
                    ? "bg-[#212124] border border-[#34343A]"
                    : "bg-[#ddd] border border-[#bbb]"
                } 
            rounded-2xl mx-auto cursor-pointer`}
              >
                <img
                  src={isDark ? textareaDark : textareaLight}
                  alt="Textarea"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className={`mt-3 font-semibold ${
                  isDark ? "text-[#ddd]" : "text-[#222]"
                }`}
              >
                Textarea
              </h2>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                8 Components
              </p>
            </div>
          </Link>
        </div>
      </div>

      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

      <div
        className={`footer ${
          isDark ? "bg-[#1F1F22] text-gray-300" : "bg-[#ddd] text-[#444]"
        }  rounded-2xl p-15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg relative overflow-hidden mt-16 mx-4 md:mx-15 mb-15`}
      >
        <div className="absolute pointer-events-none rounded-2xl" />

        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left z-10">
          Get notified when new stuff drops.
        </h2>
        {/* Right Form */}
        <div className="flex items-center md:flex-row flex-col gap-5 w-full md:w-auto z-10">
          <input
            type="email"
            placeholder="Enter your email..."
            className={`${
              isDark
                ? "bg-[#1F1F22] text-gray-300 border-[#444]"
                : "bg-[#ffffff] text-gray-900 border-[#888]"
            } placeholder-gray-400 rounded-full px-5 py-3 w-full md:w-80 outline-none border  focus:border-gray-500 transition`}
          />
          <button
            className={`${
              isDark
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-800"
            } cursor-pointer font-medium px-6 py-3 ml-3 rounded-full hover:bg-gray-200 transition`}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
