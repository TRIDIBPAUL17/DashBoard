import 'D:/PROJECT/dashboard/src/index.css';
import React from 'react';

export default function SidebarItem({ icon, label, badge, isNew, href }) {
  const content = (
    <>
      {icon}
      <span className="ml-3">{label}</span>
      {badge && <span className="ml-auto bg-indigo-800 text-xs font-semibold px-2 py-1 rounded-full">{badge}</span>}
      {isNew && <span className="ml-auto bg-red-500 text-xs font-semibold px-2 py-1 rounded-full">NEW</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center px-4 py-2 text-gray-300 hover:bg-indigo-800">
        {content}
      </a>
    );
  }

  return (
    <button className="flex items-center px-4 py-2 text-gray-300 hover:bg-indigo-800 w-full text-left">
      {content}
    </button>
  );
}