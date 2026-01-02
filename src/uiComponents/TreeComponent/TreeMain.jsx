import React, { useState } from "react";
import Tree from "./Tree";
import Tree2 from "./Tree2";
import Tree3 from "./Tree3";
import Tree4 from "./Tree4";
import { Link } from "react-router-dom";
import { Search, Github, Sun, Moon } from "lucide-react";
import Sidebar from "../sidebar";
import CodePopup from "../CodePopup";
import AppNavbar from "../../components/AppNavbar";

const TreeMain = ({ isDark, toggleTheme }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentCode, setCurrentCode] = useState("");

  const tree1Code = `
import React, { useState } from "react";

export default function TreeFolder() {
  const treeData = [
    {
      id: 1,
      name: "src",
      children: [
        {
          id: 11,
          name: "components",
          children: [
            { id: 111, name: "Navbar.jsx" },
            { id: 112, name: "CodePopup.jsx" },
          ],
        },
        {
          id: 12,
          name: "pages",
          children: [
            { id: 121, name: "Home.jsx" },
            { id: 122, name: "About.jsx" },
          ],
        },
        { id: 13, name: "index.js" },
      ],
    },
    {
      id: 2,
      name: "public",
      children: [
        { id: 21, name: "index.html" },
        { id: 22, name: "favicon.ico" },
      ],
    },
    { id: 3, name: "package.json" },
  ];

  return (
    <>
      <div className="w-full h-[500px] max-w-2xl bg-[#0b0b0b] rounded-lg flex justify-between flex-col shadow-lg p-6">
        <div className="divide-y divide-gray-800">
          {treeData.map((node) => (
            <TreeNode key={node.id} node={node} level={0} />
          ))}
        </div>
      </div>
    </>
  );
}

function TreeNode({ node, level }) {
  const [open, setOpen] = useState(true);
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;

  return (
    <div className="py-2" style={{ paddingLeft: \`\${level * 16}px\` }}>
      <div
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={() => hasChildren && setOpen((o) => !o)}
      >
        {hasChildren && (
          <span
            className={\`inline-block w-2 h-2 border-r-2 border-b-2 border-white transition-transform duration-200 \${open ? "rotate-45 mt-[-2px]" : "-rotate-45"}\`}
          ></span>
        )}
        <span className={\`text-sm \${hasChildren ? "font-medium" : "font-normal"}\`}>
          {node.name}
        </span>
      </div>
      {hasChildren && open && (
        <div className="mt-2 ml-4">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
`;

  const tree2Code = `
import React, { useState } from "react";
import { Folder, FolderOpen, File } from "lucide-react";

export default function TreeFolder() {
  const treeData = [
    {
      id: 1,
      name: "src",
      children: [
        {
          id: 11,
          name: "components",
          children: [
            { id: 111, name: "Navbar.jsx" },
            { id: 112, name: "CodePopup.jsx" },
          ],
        },
        {
          id: 12,
          name: "pages",
          children: [
            { id: 121, name: "Home.jsx" },
            { id: 122, name: "About.jsx" },
          ],
        },
        { id: 13, name: "index.js" },
      ],
    },
    {
      id: 2,
      name: "public",
      children: [
        { id: 21, name: "index.html" },
        { id: 22, name: "favicon.ico" },
      ],
    },
    { id: 3, name: "package.json" },
  ];

  return (
    <div className="w-full h-[410px] max-w-2xl bg-[#0b0b0b] rounded-lg flex flex-col shadow-lg p-6 overflow-y-auto">
      <div className="divide-y divide-gray-800">
        {treeData.map((node) => (
          <TreeNode key={node.id} node={node} level={0} />
        ))}
      </div>
    </div>
  );
}

function TreeNode({ node, level }) {
  const [open, setOpen] = useState(true);
  const hasChildren = node.children?.length > 0;

  return (
    <div style={{ paddingLeft: \`\${level * 16}px\` }} className="py-1">
      <div
        onClick={() => hasChildren && setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer select-none text-gray-200 hover:text-white transition-colors"
      >
        {hasChildren ? (
          open ? <FolderOpen size={16} /> : <Folder size={16} />
        ) : (
          <File size={14} />
        )}
        <span className="text-sm">{node.name}</span>
      </div>

      {hasChildren && open && (
        <div className="mt-1 ml-3 border-l border-gray-800 pl-2">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
`;

  const tree3Code = `
import React, { useState } from "react";

export default function TreeFolder() {
  const treeData = [
    {
      id: 1,
      name: "src",
      children: [
        {
          id: 11,
          name: "components",
          children: [
            { id: 111, name: "Navbar.jsx" },
            { id: 112, name: "CodePopup.jsx" },
          ],
        },
        {
          id: 12,
          name: "pages",
          children: [
            { id: 121, name: "Home.jsx" },
            { id: 122, name: "About.jsx" },
          ],
        },
        { id: 13, name: "index.js" },
      ],
    },
    {
      id: 2,
      name: "public",
      children: [
        { id: 21, name: "index.html" },
        { id: 22, name: "favicon.ico" },
      ],
    },
    { id: 3, name: "package.json" },
  ];

  const [expandAll, setExpandAll] = useState(true);

  const toggleAll = () => setExpandAll((prev) => !prev);

  return (
    <>
      <div className="w-full h-[550px] max-w-2xl bg-[#0b0b0b] rounded-lg flex flex-col shadow-lg p-6">
        {/* Toggle Button */}
        <div className="flex justify-end mb-3">
          <button
            onClick={toggleAll}
            className="cursor-pointer text-xs px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            {\${expandAll ? "Collapse All" : "Expand All"}}
          </button>
        </div>

        <div className="divide-y divide-gray-800 overflow-y-auto">
          {treeData.map((node) => (
            <TreeNode key={node.id} node={node} level={0} expandAll={expandAll} />
          ))}
        </div>
      </div>
    </>
  );
}

function TreeNode({ node, level, expandAll }) {
  const [open, setOpen] = useState(true);
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;

  // Sync all nodes when expandAll toggles
  React.useEffect(() => {
    if (hasChildren) setOpen(expandAll);
  }, [expandAll]);

  return (
    <div className="py-2" style={{ paddingLeft: \`\${level * 16}px\` }}>
      <div
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={() => hasChildren && setOpen((o) => !o)}
      >
        {hasChildren && (
          <span
            className={\`inline-block w-2 h-2 border-r-2 border-b-2 border-white transition-transform duration-200 \${open ? "rotate-45 mt-[-2px]" : "-rotate-45"}\`}
          ></span>
        )}
        <span
          className={\`text-sm \${hasChildren ? "font-medium" : "font-normal"}\`}
        >
          {node.name}
        </span>
      </div>

      {hasChildren && open && (
        <div className="mt-2 ml-4">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              expandAll={expandAll}
            />
          ))}
        </div>
      )}
    </div>
  );
}
`;

  const tree4Code = `
import React, { useMemo, useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  ChevronDown,
  Folder,
  File,
} from "lucide-react";

const treeData = {
  company: {
    name: "Company",
    children: ["engineering", "marketing", "operations"],
  },
  engineering: {
    name: "Engineering",
    children: ["frontend", "backend", "platform-team"],
  },
  frontend: { name: "Frontend", children: ["design-system", "web-platform"] },
  "design-system": {
    name: "Design System",
    children: ["components", "tokens", "guidelines"],
  },
  components: { name: "Components" },
  tokens: { name: "Tokens" },
  guidelines: { name: "Guidelines" },
  "web-platform": { name: "Web Platform" },
  backend: { name: "Backend", children: ["apis", "infrastructure"] },
  apis: { name: "APIs" },
  infrastructure: { name: "Infrastructure" },
  "platform-team": { name: "Platform Team" },
  marketing: { name: "Marketing", children: ["content", "seo"] },
  content: { name: "Content" },
  seo: { name: "SEO" },
  operations: { name: "Operations", children: ["hr", "finance"] },
  hr: { name: "HR" },
  finance: { name: "Finance" },
};

const INDENT_PX = 16;
const CHECK_COL_WIDTH = 36;

export default function TreeWithCheckboxes() {
  const [expanded, setExpanded] = useState(() =>
    new Set(["company", "engineering", "frontend", "design-system"])
  );

  const [checkedSet, setCheckedSet] = useState(() => new Set(["components", "tokens"]));

  const { parentMap, getDescendants } = useMemo(() => {
    const parentMap = {};
    Object.keys(treeData).forEach((id) => {
      const node = treeData[id];
      (node.children || []).forEach((childId) => {
        parentMap[childId] = id;
      });
    });

    function getDescendants(id) {
      const out = [];
      function dfs(cur) {
        out.push(cur);
        const node = treeData[cur];
        if (node?.children?.length) {
          for (const c of node.children) dfs(c);
        }
      }
      dfs(id);
      return out;
    }

    return { parentMap, getDescendants };
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => {
      const s = new Set(prev);
      if (s.has(id)) s.delete(id);
      else s.add(id);
      return s;
    });
  };

  const onToggleCheck = (id, checked) => {
    const descendants = getDescendants(id);
    setCheckedSet((prev) => {
      const s = new Set(prev);
      if (checked) {
        for (const d of descendants) s.add(d);
      } else {
        for (const d of descendants) s.delete(d);
      }
      return s;
    });
  };

  return (
    <div className="w-full h-[530px] max-w-2xl bg-[#0b0b0b] rounded-lg flex flex-col shadow-lg p-6 overflow-auto text-white">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium">Project structure</h3>
      </div>

      <div className="divide-y divide-gray-800">
        <TreeNode
          id="company"
          level={0}
          expanded={expanded}
          toggleExpand={toggleExpand}
          checkedSet={checkedSet}
          onToggleCheck={onToggleCheck}
          getDescendants={getDescendants}
          treeData={treeData}
        />
      </div>
    </div>
  );
}

function TreeNode({
  id,
  level,
  expanded,
  toggleExpand,
  checkedSet,
  onToggleCheck,
  getDescendants,
  treeData,
}) {
  const node = treeData[id];
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const isExpanded = expanded.has(id);

  const descendants = useMemo(() => getDescendants(id), [id, getDescendants]);
  const total = descendants.length;
  const checkedCount = descendants.reduce(
    (acc, cur) => (checkedSet.has(cur) ? acc + 1 : acc),
    0
  );

  const allChecked = checkedCount === total && total > 0;
  const someChecked = checkedCount > 0 && checkedCount < total;
  const isChecked = total === 1 ? checkedSet.has(id) : allChecked;

  const checkboxRef = useRef(null);
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = someChecked;
    }
  }, [someChecked]);

  const handleChange = (e) => {
    const next = e.target.checked;
    onToggleCheck(id, next);
  };

  return (
    <div className="py-2">
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: \`\${CHECK_COL_WIDTH}px 1fr\` }}
      >
        <div className="flex items-center justify-center">
          <input
            ref={checkboxRef}
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            className="w-4 h-4 accent-gray-500 cursor-pointer"
            aria-checked={someChecked ? "mixed" : isChecked}
          />
        </div>

        <div style={{ paddingLeft: \`\${level * INDENT_PX}px\` }} className="flex items-center gap-2">
          {hasChildren ? (
            <button
              onClick={() => toggleExpand(id)}
              className="p-0.5 -ml-1 rounded text-gray-400 hover:text-white"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          ) : (
            <div style={{ width: 20 }} />
          )}

          <div className="flex items-center gap-2 cursor-default select-none">
            {hasChildren ? <Folder size={16} className="text-gray-400" /> : <File size={14} className="text-gray-400" />}
            <span className={\`text-sm \${hasChildren ? "font-medium" : "font-normal"}\`}>{node.name}</span>
          </div>
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div className="mt-1">
          {node.children.map((childId) => (
            <TreeNode
              key={childId}
              id={childId}
              level={level + 1}
              expanded={expanded}
              toggleExpand={toggleExpand}
              checkedSet={checkedSet}
              onToggleCheck={onToggleCheck}
              getDescendants={getDescendants}
              treeData={treeData}
            />
          ))}
        </div>
      )}
    </div>
  );
}
`;

  const handleSeeCode = (code) => {
    setCurrentCode(code);
    setShowPopup(true);
  };

  return (
    <>
    <AppNavbar isDark={isDark} toggleTheme={toggleTheme}/>

      <div className="flex justify-between">
        <Sidebar isDark={isDark} toggleTheme={toggleTheme} />
        <div
          className={`treeMain overflow-hidden w-[100vw] ${
            isDark ? "bg-[#000] text-[#fff]" : "bg-[#fff] text-[#ddd]"
          } flex items-center flex-col gap-5 p-10`}
        >
          <div
            className={`topContent w-[100%] mb-5 flex flex-col items-center justify-center ${
              isDark ? "bg-[#000] text-[#ddd]" : "bg-[#fff] text-[#111]"
            }`}
          >
            <h1
              style={{ fontFamily: "cal sans, sans-serif" }}
              className=" text-[5vw]"
            >
              Tree
            </h1>
            <p
              className={`${isDark ? "text-[#d1d1d1a5]" : "text-[#1f1f1fa5]"}`}
            >
              A growing collection of 4 navbar components built with React and
              Tailwind CSS.
            </p>
          </div>
          <div
            className={`treecompo rounded-lg  p-10 w-[100%] flex items-center justify-center flex-col gap-10 border ${
              isDark ? "border-[#ffffff31]" : "border-[#00000031]"
            }`}
          >
            <div
              className={` mb-5 border-1 ${
                isDark ? "border-[#ffffff31]" : " border-[#00000031]"
              } rounded-lg w-[100%] flex items-center justify-center p-5 flex-col`}
            >
              <div className="w-[100%] flex items-center justify-end">
                <div className="relative group inline-block">
                  <div
                    onClick={() => handleSeeCode(tree1Code)}
                    className={`navbar-1-code mb-5 ${
                      isDark
                        ? "bg-[#00000062] border-[#e6e6e64f]"
                        : "bg-[#ebebebad] text-[#131313] border-[#00000031]"
                    } p-2 px-3 border rounded-lg cursor-pointer text-2xl`}
                  >
                    <i className="ri-code-s-slash-line"></i>
                  </div>

                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 text-sm bg-[#111111] border border-[#ffffff31] select-none text-white px-2 py-1 rounded  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-[100px] flex items-center justify-center">
                    See Code
                  </span>
                </div>
              </div>

              <Tree />
            </div>

            <div
              className={` mb-5 border-1 ${
                isDark ? "border-[#ffffff31]" : " border-[#0808082d]"
              } rounded-lg w-[100%] flex items-center justify-center p-5 flex-col`}
            >
              <div className="w-[100%] flex items-center justify-end">
                <div className="relative group inline-block">
                  <div
                    onClick={() => handleSeeCode(tree2Code)}
                    className={`navbar-1-code mb-5 ${
                      isDark
                        ? "bg-[#00000062] border-[#e6e6e64f]"
                        : "bg-[#ebebebad] text-[#131313] border-[#00000031]"
                    } p-2 px-3 border rounded-lg cursor-pointer text-2xl`}
                  >
                    <i className="ri-code-s-slash-line"></i>
                  </div>

                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 text-sm bg-[#111111] border border-[#ffffff31] select-none text-white px-2 py-1 rounded  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-[100px] flex items-center justify-center">
                    See Code
                  </span>
                </div>
              </div>
              <Tree2 />
            </div>

            <div
              className={` mb-5 border-1 ${
                isDark ? "border-[#ffffff31]" : " border-[#0808082d]"
              } rounded-lg w-[100%] flex items-center justify-center p-5 flex-col`}
            >
              <div className="w-[100%] flex items-center justify-end">
                <div className="relative group inline-block">
                  <div
                    onClick={() => handleSeeCode(tree3Code)}
                    className={`navbar-1-code mb-5 ${
                      isDark
                        ? "bg-[#00000062] border-[#e6e6e64f]"
                        : "bg-[#ebebebad] text-[#131313] border-[#00000031]"
                    } p-2 px-3 border rounded-lg cursor-pointer text-2xl`}
                  >
                    <i className="ri-code-s-slash-line"></i>
                  </div>

                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 text-sm bg-[#111111] border border-[#ffffff31] select-none text-white px-2 py-1 rounded  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-[100px] flex items-center justify-center">
                    See Code
                  </span>
                </div>
              </div>
              <Tree3 />
            </div>

            <div
              className={` mb-5 border-1 ${
                isDark ? "border-[#ffffff31]" : " border-[#0808082d]"
              } rounded-lg w-[100%] flex items-center justify-center p-5 flex-col`}
            >
              <div className="w-[100%] flex items-center justify-end">
                <div className="relative group inline-block">
                  <div
                    onClick={() => handleSeeCode(tree4Code)}
                    className={`navbar-1-code mb-5 ${
                      isDark
                        ? "bg-[#00000062] border-[#e6e6e64f]"
                        : "bg-[#ebebebad] text-[#131313] border-[#00000031]"
                    } p-2 px-3 border rounded-lg cursor-pointer text-2xl`}
                  >
                    <i className="ri-code-s-slash-line"></i>
                  </div>

                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 text-sm bg-[#111111] border border-[#ffffff31] select-none text-white px-2 py-1 rounded  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-[100px] flex items-center justify-center">
                    See Code
                  </span>
                </div>
              </div>
              <Tree4 />
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

export default TreeMain;
