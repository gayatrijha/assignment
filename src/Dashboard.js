// Dashboard.js
import React from "react";
import FormSection from "./FormSection";
import logo from "./assets/logo.png";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md  ">
        <div className="flex  mb-10 px-10 mt-6 gap-5">
          <img src={logo} className="w-10 h-10" />
          <h1 className="text-4xl font-bold ">Entra</h1>
        </div>

        <ul className="space-y-5 text-black flex flex-col  justify-center">
          <li className="bg-[#61B0D1] text-white  px-10 py-2 rounded">
            Invite Visitor
          </li>
          <li className="px-10">Invitation List</li>
          <li className="px-10">Book Meeting Room</li>
          <li className="px-10">Calendar View</li>
          <li className="px-10">Meeting Room View</li>
          <li className="px-10">Settings</li>
          <li className="px-10">Emergency Alert</li>
          <li className="px-10">Helpdesk</li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-blue-50 overflow-auto">
        <div className="flex space-x-20">
          <h2 className="text-sm font-semibold mb-4 bg-[#61B0D1] shadow-lg text-white px-8  py-2 rounded-xl">
            Single Invite
          </h2>
          <h2 className=" font-semibold mb-4 text-sm    text-black px-4  py-2 rounded-md">
            Bulk Invite
          </h2>
          <h2 className=" font-semibold mb-4 text-sm    text-black px-4  py-2 rounded-md">
            Meeting Invite
          </h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Form placeholder */}
          <FormSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
