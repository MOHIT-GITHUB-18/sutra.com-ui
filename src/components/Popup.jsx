import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Popup({ onClose, isDark, toggleTheme }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const components = [
    "NavBar",
    "Tree",
    "Accordion",
    "Alert",
    "Avatar",
    "Badge",
    "Banner",
    "Breadcrumb",
    "Button",
    "Calendar & Date picker",
    "Checkbox",
    "Image Cropper",
    "Dialog",
    "Dropdown",
    "File Upload",
    "Event Calendar",
    "Input",
    "Notification",
    "Pagination",
    "Popover",
    "Radio",
    "Select",
    "SliderStepper",
    "Switch",
    "Table",
    "Tabs",
    "Textarea",
  ];

  // Auto focus input when popup opens
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const filtered = components.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    if (item === "NavBar") navigate("/navbar");
    else if (item === "Tree") navigate("/tree");
    else navigate("/comingsoon");
    onClose();
  };

  // Enter key = select first result
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filtered.length > 0) {
      handleSelect(filtered[0]);
    }
  };

  return (
  <div
    onClick={onClose}
    className="fixed inset-0 bg-[#1c202eac] backdrop-blur-md flex items-center justify-center z-50"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[50vw] max-w-2xl h-[60vh] bg-[#1C1F29] border border-[#2f3653] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#2f3653]">
        <h2 className="text-white text-lg font-semibold">
          Search Components
        </h2>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white cursor-pointer duration-75 transition"
        >
          <i className="ri-close-line text-xl"></i>
        </button>
      </div>

      {/* Search */}
      <div className="px-5 py-4">
        <div className="flex items-center gap-3 bg-[#18181b62] border border-[#3f3f46] rounded-xl px-4 py-3 focus-within:ring-1 focus-within:ring-[#3f3f46]">
          <i className="ri-search-2-line text-gray-400"></i>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a component name..."
            className="w-full bg-transparent outline-none text-white placeholder-gray-500 text-base"
          />
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 px-5 pb-5 overflow-y-auto">
        {query && (
          <ul className="space-y-1">
            {filtered.length > 0 ? (
              filtered.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="px-4 py-3 rounded-lg bg-transparent hover:bg-[#2c2c3ee8] cursor-pointer transition duration-100 flex items-center justify-between text-white"
                >
                  <span>{item}</span>
                  <span className="text-xs text-gray-400"><i class="ri-corner-down-left-fill"></i> Enter</span>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-gray-500">
                No results found
              </li>
            )}
          </ul>
        )}

        {!query && (
          <p className="text-gray-500 text-sm mt-6 text-center">
            Start typing to search components
          </p>
        )}
      </div>
    </div>
  </div>
);

}
