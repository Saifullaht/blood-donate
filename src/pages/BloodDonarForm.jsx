import React, { useState } from "react";
import axios from "axios";
import { message, Spin, DatePicker, Modal } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import moment from "moment";
import { AppRoutes } from "../Constant/constant";
import Cookies from "js-cookie";

const BloodDonorForm = () => {
  const [loading, setLoading] = useState(false);
  const [donar, setDonar] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    gender: "",
    age: "",
    weight: "",
    city: "",
    country: "",
    dob: null, // Date of Birth
    bloodType: "",
    antibodies: "",
    lastDonationDate: null, // Last Donation Date
    healthIssues: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (key, value) => {
    setDonar((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = Cookies.get("token");
      const payload = {
        ...donar,
        dob: donar.dob ? donar.dob.format("YYYY-MM-DD") : null,
        lastDonationDate: donar.lastDonationDate
          ? donar.lastDonationDate.format("YYYY-MM-DD")
          : null,
      };

      await axios.post(AppRoutes.donarForm, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsModalVisible(true); // Show modal on successful submission
      setDonar({
        fullname: "",
        email: "",
        phoneNumber: "",
        gender: "",
        age: "",
        weight: "",
        city: "",
        country: "",
        dob: null,
        bloodType: "",
        antibodies: "",
        lastDonationDate: null,
        healthIssues: "",
      });
    } catch (error) {
      message.error("Failed to submit donor data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    window.location.href = "/"; // Redirect to homepage
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50">
      <form
        className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
          Blood Donor Registration
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={donar.fullname}
            onChange={(e) => handleChange("fullname", e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={donar.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <PhoneInput
            country={"pk"}
            value={donar.phoneNumber}
            onChange={(value) => handleChange("phoneNumber", value)}
            inputClass="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            containerClass="w-full"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Gender</label>
          <select
            value={donar.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Age</label>
          <input
            type="number"
            value={donar.age}
            onChange={(e) => handleChange("age", e.target.value)}
            placeholder="Enter your age"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            min="18"
            max="65"
          />
        </div>

        {/* Weight */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Weight (kg)</label>
          <input
            type="number"
            value={donar.weight}
            onChange={(e) => handleChange("weight", e.target.value)}
            placeholder="Enter your weight"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
            min="50"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">City</label>
          <input
            type="text"
            value={donar.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="Enter your city"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Country */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Country</label>
          <input
            type="text"
            value={donar.country}
            onChange={(e) => handleChange("country", e.target.value)}
            placeholder="Enter your country"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Blood Type */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Blood Type</label>
          <select
            value={donar.bloodType}
            onChange={(e) => handleChange("bloodType", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          >
            <option value="" disabled>
              Select your blood type
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date of Birth</label>
          <DatePicker
            value={donar.dob}
            onChange={(date) => handleChange("dob", date)}
            format="YYYY-MM-DD"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Last Donation Date */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Last Donation Date</label>
          <DatePicker
            value={donar.lastDonationDate}
            onChange={(date) => handleChange("lastDonationDate", date)}
            format="YYYY-MM-DD"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Health Issues */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Health Issues</label>
          <textarea
            value={donar.healthIssues}
            onChange={(e) => handleChange("healthIssues", e.target.value)}
            placeholder="Enter any health issues"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spin size="small" />
              <span className="ml-2">Submitting...</span>
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>

      {/* Modal for confirmation */}
      <Modal
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalOk}
        centered
        footer={[
          <button
            key="ok"
            onClick={handleModalOk}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
          >
            OK
          </button>,
        ]}
        styles={{
          body: {
            // backgroundColor: "#ffcccc",
            textAlign: "center",
          },
        }}
      >
        <p>Your request has been sent to the admin. You will be notified once your request is approved.</p>
      </Modal>
    </div>
  );
};

export default BloodDonorForm;
