import React from "react";

const VisitorPopup = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-[500px] shadow-lg relative">
        <button
          className="absolute top-2 right-3 text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Visitor"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">{data.fullName}</h2>
            <p className="text-sm">Visiting: {data.host}</p>
            <p className="text-sm">Official Meeting: {data.purpose}</p>
          </div>
          <span className="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            Approved
          </span>
        </div>

        <div className="text-sm space-y-1">
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
  );
};

export default VisitorPopup;
