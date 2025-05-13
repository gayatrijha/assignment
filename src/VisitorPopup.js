import React from "react";
import user from "./assets/user.png";
import dwnA from "./assets/dwnArrow.png";

const VisitorPopup = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-[700px] shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-600 text-2xl font-bold hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        {/* Header with Avatar and Name */}
        <div className="flex items-center mb-6">
          <img
            src={user}
            alt="Visitor"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold capitalize">
              {data.fullName}
            </h2>
            <p className="text-sm">Visiting: {data.host}</p>
            <p className="text-sm">Official Meeting: {data.purpose}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-[#61B0D1] text-white px-4 py-1 rounded-full text-sm">
              Approved
            </span>
            <img src={dwnA} alt="Download" className="w-5 h-5" />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          {/* Left Column */}
          <div className="space-y-2">
            <p>
              <strong>Email ID:</strong> {data.email}
            </p>
            <p>
              <strong>Mobile Number:</strong> {data.mobile}
            </p>
            <p>
              <strong>Date of Meet:</strong> {data.date}
            </p>
            <p>
              <strong>Time:</strong> {data.time}
            </p>
            <p>
              <strong>Meeting Room:</strong> {data.room}
            </p>
            <p>
              <strong>Company Name:</strong> XYZ
            </p>
            <p>
              <strong>Accessories Carried:</strong> Laptop, Phone
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            <p>
              <strong>Identity Proof:</strong> Aadhar card
            </p>
            <p>
              <strong>ID number:</strong> 30** **** **90
            </p>
            <p>
              <strong>Visitor ID number:</strong> 123456
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorPopup;
