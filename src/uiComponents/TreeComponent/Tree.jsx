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
    <div className="py-2" style={{ paddingLeft: `${level * 16}px` }}>
      <div
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={() => hasChildren && setOpen((o) => !o)}
      >
        {hasChildren && (
          <span
            className={`inline-block w-2 h-2 border-r-2 border-b-2 border-white transition-transform duration-200 ${
              open ? "rotate-45 mt-[-2px]" : "-rotate-45"
            }`}
          ></span>
        )}
        <span className={`text-sm ${hasChildren ? "font-medium" : "font-normal"}`}>
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