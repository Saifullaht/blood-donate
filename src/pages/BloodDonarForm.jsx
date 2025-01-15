import React, { useState } from "react";
import axios from "axios";
import { message, Spin } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AppRoutes } from "../Constant/constant";
 import Cookies from "js-cookie";

const BloodDonorForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Capture form data
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phoneNumber.value;
    const gender = e.target.gender.value;
    const age = e.target.age.value;
    const weight = e.target.weight.value;
    const city = e.target.city.value;
    const country = e.target.country.value;
    const dob = e.target.dob.value;
    const bloodType = e.target.bloodType.value;
    const antibodies = e.target.antibodies.value;
    const lastDonationDate = e.target.lastDonationDate.value;
    const healthIssues = e.target.healthIssues.value;

    // Prepare the data object
    const formData = {
      fullname,
      email,
      phoneNumber,
      gender,
      age,
      weight,
      city,
      country,
      dob,
      bloodType,
      antibodies,
      lastDonationDate,
      healthIssues,
    };

    await axios.post(AppRoutes.DonarForm, formData , {
      headers:{
        Authorization: "Bearer" + Cookies.get("token")
      }
     })
     .then((res) => {
       message.success("Form submitted successfully!");
       setLoading(false);
     })
    .catch((err) => {
      console.log(err);
      
    })
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
            name="fullname"
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
            name="email"
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
            inputProps={{
              name: "phoneNumber",
              required: true,
            }}
            inputClass="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            containerClass="w-full"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Gender</label>
          <select
            name="gender"
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
            name="age"
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
            name="weight"
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
            name="city"
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
            name="country"
            placeholder="Enter your country"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Blood Type */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Blood Type</label>
          <select
            name="bloodType"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          >
            <option value="" disabled>
              Select your blood type
            </option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Antibodies */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Antibodies (comma-separated)
          </label>
          <input
            type="text"
            name="antibodies"
            placeholder="Enter antibodies"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Last Donation Date */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Last Donation Date</label>
          <input
            type="date"
            name="lastDonationDate"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Health Issues */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Health Issues</label>
          <textarea
            name="healthIssues"
            placeholder="Enter any health issues"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>
        </div>

        {/* Submit Button */}
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
    </div>
  );
};

export default BloodDonorForm;
