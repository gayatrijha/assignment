import React, { useState } from "react";
import VisitorPopup from "./VisitorPopup";

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
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-6">
        Please fill in these details.
      </h3>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Mobile Number"
          className="input"
          value={formData.mobile}
          onChange={(e) => handleChange("mobile", e.target.value)}
        />
        <input
          type="text"
          placeholder="Full Name"
          className="input"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />
        <input
          type="email"
          placeholder="Email ID"
          className="input"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <select
          className="input"
          value={formData.purpose}
          onChange={(e) => handleChange("purpose", e.target.value)}
        >
          <option value="">Purpose</option>
          <option>Official Meeting</option>
          <option>Personal Visit</option>
        </select>

        <select
          className="input"
          value={formData.entryPoint}
          onChange={(e) => handleChange("entryPoint", e.target.value)}
        >
          <option value="">Entry Point</option>
          <option>Main Gate</option>
          <option>Back Gate</option>
        </select>

        <select
          className="input"
          value={formData.host}
          onChange={(e) => handleChange("host", e.target.value)}
        >
          <option value="">Host</option>
          <option>Akshay Kumar</option>
          <option>Rahul Sharma</option>
        </select>

        <select
          className="input"
          value={formData.branch}
          onChange={(e) => handleChange("branch", e.target.value)}
        >
          <option value="">Branch</option>
          <option>HQ</option>
          <option>Remote Office</option>
        </select>

        <select
          className="input"
          value={formData.vehicle}
          onChange={(e) => handleChange("vehicle", e.target.value)}
        >
          <option value="">Vehicle</option>
          <option>Car</option>
          <option>Bike</option>
        </select>

        <input
          type="text"
          placeholder="Vehicle Number"
          className="input"
          value={formData.vehicleNumber}
          onChange={(e) => handleChange("vehicleNumber", e.target.value)}
        />
        <input
          type="date"
          className="input"
          value={formData.date}
          onChange={(e) => handleChange("date", e.target.value)}
        />
        <input
          type="text"
          placeholder="Visit Day"
          className="input"
          value={formData.day}
          onChange={(e) => handleChange("day", e.target.value)}
        />
        <input
          type="time"
          className="input"
          value={formData.time}
          onChange={(e) => handleChange("time", e.target.value)}
        />
        <input
          type="text"
          placeholder="Meeting Room"
          className="input"
          value={formData.room}
          onChange={(e) => handleChange("room", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm font-medium">Recurrence</span>
        </label>
      </div>

      {rows.map((_, index) => (
        <div key={index} className="grid grid-cols-4 gap-4 items-center mb-3">
          <input type="date" className="input" />
          <input type="text" placeholder="Visit Day" className="input" />
          <input type="time" className="input" />
          <input type="text" placeholder="Meeting Room" className="input" />
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveRow(index)}
              className="text-red-500 text-sm"
            >
              Remove
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
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={() => setShowModal(true)}
        >
          Invite
        </button>
        <button className="bg-gray-300 text-black px-6 py-2 rounded-md hover:bg-gray-400 transition">
          Reset
        </button>
      </div>

      {showModal && (
        <VisitorPopup data={formData} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default FormSection;
