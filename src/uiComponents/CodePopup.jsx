// CodePopup.jsx
import React, { useEffect, useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark/index.js";


export default function CodePopup({ code = "", filename = "", onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "auto";
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (e) {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    }
  };

  // basic language detection from filename or code heuristics
  const detectLanguage = () => {
    const ext = (filename || "").split(".").pop()?.toLowerCase() || "";
    if (ext === "js" || ext === "jsx") return "jsx";
    if (ext === "ts" || ext === "tsx") return "tsx";
    if (ext === "html" || code.trim().startsWith("<")) return "html";
    if (ext === "css" || code.includes("{") && code.includes("}")) return "css";
    if (ext === "json" || (code.trim().startsWith("{") && code.includes(":"))) return "json";
    if (ext === "py") return "python";
    if (ext === "java") return "java";
    // fallback
    return "jsx";
  };

  const language = detectLanguage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-5xl h-[80vh] bg-[#1e1e1e] text-sm text-white rounded-lg border border-[#333] shadow-lg overflow-hidden flex flex-col">
        {/* header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#333]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500/90 transition duration-200 hover:scale-150" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/90 transition duration-200 hover:scale-150" />
            <div className="w-3 h-3 rounded-full bg-green-500/90 transition duration-200 hover:scale-150" />
            <div className="ml-3 text-sm text-gray-300">{filename || "Code Preview"}</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="cursor-pointer transition"
            >
              {copied ? <svg fill="#00ff88" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="tick"> <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="#00ff88" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> </g> </g> </g></svg>: <svg fill="#fff" width="18px" height="18px" viewBox="0 0 1000.00 1000.00" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M695 20H172q-35 0-61 25.5T85 107v610h87V107h523V20zm131 174H347q-36 0-62 25.5T259 281v610q0 36 26 61.5t62 25.5h479q35 0 61-25.5t26-61.5V281q0-36-25.5-61.5T826 194zm0 697H347V281h479v610z"></path></g></svg>}
            </button>
            <button
              onClick={onClose}
              className="px-3 text-[18px] cursor-pointer py-1 rounded-md text-gray-300 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* code area */}
        <div className="flex-1 overflow-auto">
          <Highlight {...defaultProps} theme={theme} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={`${className} m-0 p-4 whitespace-pre min-w-full`}
                style={{
                  ...style,
                  background: "transparent",
                  fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: 14,
                  lineHeight: "1.5",
                }}
              >
                {tokens.map((line, i) => {
                  const { key: lineKey, ...lineProps } = getLineProps({ line, key: i });
                  return (
                    <div key={lineKey || i} {...lineProps} className="flex">
                      {/* line number */}
                      <div className="select-none text-[#6b6b6b] pr-4 text-right w-[3.25rem]">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        {line.map((token, key) => {
                          const { key: tokenKey, ...tProps } = getTokenProps({ token, key });
                          return <span key={tokenKey || key} {...tProps} />;
                        })}
                      </div>
                    </div>
                  );
                })}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
}
