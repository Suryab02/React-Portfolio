import React from "react";
import "./dashboard.css"
function Dashboard() {
  return (
   <div className="doc">
  <div className="grid grid-cols-2 gap-6 mt-16 uppercase text-2xl font-semibold text-neutral-400">
    <div className="header_name">
        <span>SURYA PRABHAS BANDARU</span>
    </div>
  <div>
    <ul className="flex flex-row justify-evenly">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
    </ul>
  </div>
  </div>
  </div>);
}

export default Dashboard;
