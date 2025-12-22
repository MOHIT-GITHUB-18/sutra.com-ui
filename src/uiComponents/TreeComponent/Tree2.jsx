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
    <div style={{ paddingLeft: `${level * 16}px` }} className="py-1">
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
