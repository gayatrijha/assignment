// Dashboard.js
import React from "react";
import FormSection from "./FormSection";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Entra</h1>
        <ul className="space-y-4 text-blue-600">
          <li>Invite Visitor</li>
          <li>Invitation List</li>
          <li>Book Meeting Room</li>
          <li>Calendar View</li>
          <li>Meeting Room View</li>
          <li>Settings</li>
          <li>Emergency Alert</li>
          <li>Helpdesk</li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-blue-50 overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">Single Invite</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Form placeholder */}
          <FormSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
