// Dashboard.js
import React from "react";
import FormSection from "./FormSection";
import logo from "./assets/logo.png";
import user from "./assets/user.png";

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

      {/* Top Navigation Bar */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between bg-blue-50 px-6 py-4">
          {/* Invite Tabs */}
          <div className="flex space-x-8">
            <button className="text-sm font-semibold bg-[#61B0D1] shadow-lg text-white px-6 py-2 rounded-xl">
              Single Invite
            </button>
            <button className="text-sm font-semibold text-black px-6 py-2">
              Bulk Invite
            </button>
            <button className="text-sm font-semibold text-black px-6 py-2">
              Meeting Invite
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-6">
            {/* Language Dropdown */}
            <div className="bg-[#F3EEE7] px-4 py-1 rounded-full text-sm flex items-center gap-2">
              EN <span className="text-xs">▼</span>
            </div>

            {/* Notification Bell */}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 10-12 0v3c0 .386-.148.735-.405 1.005L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* Profile Picture */}
            <img
              src={user}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main content area */}
        <div className="flex p-6 bg-blue-50 overflow-auto">
          {/* <div className="flex space-x-20">
          <h2 className="text-sm font-semibold mb-4 bg-[#61B0D1] shadow-lg text-white px-8  py-2 rounded-xl">
            Single Invite
          </h2>
          <h2 className=" font-semibold mb-4 text-sm    text-black px-4  py-2 rounded-md">
            Bulk Invite
          </h2>
          <h2 className=" font-semibold mb-4 text-sm    text-black px-4  py-2 rounded-md">
            Meeting Invite
          </h2>
        </div> */}

          <div className=" p-6 ">
            {/* Form placeholder */}
            <FormSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
