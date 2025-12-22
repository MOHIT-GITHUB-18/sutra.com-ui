// TreeWithCheckboxes.jsx
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
const CHECK_COL_WIDTH = 36; // px for left checkbox column

export default function TreeWithCheckboxes() {
  // expanded nodes set
  const [expanded, setExpanded] = useState(() =>
    new Set(["company", "engineering", "frontend", "design-system"])
  );

  // checked nodes set (stores ids that are currently checked)
  const [checkedSet, setCheckedSet] = useState(() => new Set(["components", "tokens"]));

  // memo: parent map and helper to get descendants
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

  // toggle expand/collapse for an item
  const toggleExpand = (id) => {
    setExpanded((prev) => {
      const s = new Set(prev);
      if (s.has(id)) s.delete(id);
      else s.add(id);
      return s;
    });
  };

  // when a node checkbox changes:
  // - if checked: add that node + all descendants
  // - if unchecked: remove that node + all descendants
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
        {/* Example single toggle button (optional) */}
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

  // compute checked / indeterminate status by looking at all descendants (including self)
  const descendants = useMemo(() => getDescendants(id), [id, getDescendants]);
  const total = descendants.length;
  const checkedCount = descendants.reduce((acc, cur) => (checkedSet.has(cur) ? acc + 1 : acc), 0);

  const allChecked = checkedCount === total && total > 0;
  const someChecked = checkedCount > 0 && checkedCount < total;
  const isChecked = total === 1 ? checkedSet.has(id) : allChecked; // leaf handled by same logic

  // ref to set indeterminate on native checkbox
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
        style={{ gridTemplateColumns: `${CHECK_COL_WIDTH}px 1fr` }}
      >
        {/* CHECKBOX column (always aligned) */}
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

        {/* CONTENT column (indent applied here) */}
        <div style={{ paddingLeft: `${level * INDENT_PX}px` }} className="flex items-center gap-2">
          {/* expand/collapse icon (only consumes space if has children) */}
          {hasChildren ? (
            <button
              onClick={() => toggleExpand(id)}
              className="p-0.5 -ml-1 rounded text-gray-400 hover:text-white"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          ) : (
            // keep a placeholder to align labels with folder icons
            <div style={{ width: 20 }} />
          )}

          {/* icon + label */}
          <div className="flex items-center gap-2 cursor-default select-none">
            {hasChildren ? <Folder size={16} className="text-gray-400" /> : <File size={14} className="text-gray-400" />}
            <span className={`text-sm ${hasChildren ? "font-medium" : "font-normal"}`}>{node.name}</span>
          </div>
        </div>
      </div>

      {/* children */}
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
