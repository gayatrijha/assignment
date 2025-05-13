import React, { useState } from "react";
import VisitorPopup from "./VisitorPopup";
import del from "./assets/Trash.png";
const FormSection = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    fullName: "",
    email: "",
    purpose: "",
    entryPoint: "",
    host: "",
    branch: "",
    vehicle: "",
    vehicleNumber: "",
    date: "",
    day: "",
    time: "",
    room: "",
  });

  const [rows, setRows] = useState([{ date: "", day: "", time: "", room: "" }]);
  const [showModal, setShowModal] = useState(false);

  const handleAddRow = () => {
    setRows([...rows, { date: "", day: "", time: "", room: "" }]);
  };

  const handleRemoveRow = (index) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl p-6 ">
      <h3 className="text-lg font-medium mb-6">
        Please fill in these details.
      </h3>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            className="input border border-gray-400 rounded-md"
            value={formData.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="input border border-gray-400 rounded-md"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email ID</label>
          <input
            type="email"
            className="input border border-gray-400 rounded-md"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Purpose</label>
          <select
            className="input  border border-gray-400 rounded-md"
            value={formData.purpose}
            onChange={(e) => handleChange("purpose", e.target.value)}
          >
            <option value=""></option>
            <option>Official Meeting</option>
            <option>Personal Visit</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Entry Point</label>
          <select
            className="input  border border-gray-400 rounded-md"
            value={formData.entryPoint}
            onChange={(e) => handleChange("entryPoint", e.target.value)}
          >
            <option value=""></option>
            <option>Main Gate</option>
            <option>Back Gate</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Host</label>
          <select
            className="input  border border-gray-400 rounded-md"
            value={formData.host}
            onChange={(e) => handleChange("host", e.target.value)}
          >
            <option value=""></option>
            <option>Akshay Kumar</option>
            <option>Rahul Sharma</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Branch</label>
          <select
            className=" input  border border-gray-400 rounded-md"
            value={formData.branch}
            onChange={(e) => handleChange("branch", e.target.value)}
          >
            <option value=""></option>
            <option>HQ</option>
            <option>Remote Office</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Vehicle</label>
          <select
            className="input  border border-gray-400 rounded-md"
            value={formData.vehicle}
            onChange={(e) => handleChange("vehicle", e.target.value)}
          >
            <option value=""></option>
            <option>Car</option>
            <option>Bike</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Vehicle Number
          </label>
          <input
            type="text"
            className="input  border border-gray-400 rounded-md"
            value={formData.vehicleNumber}
            onChange={(e) => handleChange("vehicleNumber", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Visit Date</label>
          <input
            type="date"
            className="input  border border-gray-400 rounded-md"
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Visit Day</label>
          <input
            type="text"
            className=" input  border border-gray-400 rounded-md"
            value={formData.day}
            onChange={(e) => handleChange("day", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1"> Time</label>
          <input
            type="time"
            className=" input  border border-gray-400 rounded-md"
            value={formData.time}
            onChange={(e) => handleChange("time", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Meeting Room</label>
          <input
            type="text"
            className=" input  border border-gray-400 rounded-md"
            value={formData.room}
            onChange={(e) => handleChange("room", e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm font-medium">Recurrence</span>
        </label>
      </div>

      {rows.map((_, index) => (
        <div key={index} className="grid grid-cols-5 gap-4 items-center mb-3">
          <input type="date" className="input" />
          <input type="text" placeholder="Visit Day" className="input" />
          <input type="time" className="input" />
          <input type="text" placeholder="Meeting Room" className="input" />
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveRow(index)}
              className="bg-[#61B0D1] w-6 rounded-full"
            >
              <img src={del} className="" />
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddRow}
        className="flex items-center text-blue-600 text-sm mb-6"
      >
        Add Row
      </button>

      <div className="flex space-x-4">
        <button
          className="bg-[#61B0D1] w-64 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={() => setShowModal(true)}
        >
          Invite
        </button>
        <button className="bg-[#61B0D1] w-64 text-white px-6 py-2 rounded-md hover:bg-gray-400 transition">
          Reset
        </button>
      </div>

      {showModal && (
        <VisitorPopup
          data={formData}
          onClose={() => {
            setShowModal(false);
            setFormData({
              mobile: "",
              fullName: "",
              email: "",
              purpose: "",
              entryPoint: "",
              host: "",
              branch: "",
              vehicle: "",
              vehicleNumber: "",
              date: "",
              day: "",
              time: "",
              room: "",
            });
            setRows([{ date: "", day: "", time: "", room: "" }]);
          }}
        />
      )}
    </div>
  );
};

export default FormSection;
