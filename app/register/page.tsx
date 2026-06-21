"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Registration Successful ✅");

        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          gender: "",
          country: "",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-24 px-6 md:px-16">
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Join Al Anas Islamic Academy
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Register For Online Quran Classes
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Start your Quran learning journey with qualified male & female teachers.
            Flexible timings, one-on-one classes, and worldwide availability.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Certified Quran Tutors</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Free Trial Classes</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Flexible Schedule</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-10">

          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Student Registration
          </h2>

          <p className="text-gray-500 text-center mt-2">
            Fill the form below to get started
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Name */}
            <input
  type="text"
  name="name"
  placeholder="Full Name"
  value={formData.name}
  onChange={handleChange}
  required
  minLength={3}
  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
/>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
            />

            {/* Phone */}
            <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  required
  pattern="[0-9]{7,15}"
  title="Enter a valid phone number"
  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
/>

            {/* Course */}
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
            >
              <option value="">Select Course</option>
              <option value="Quran with Tajweed">
                Quran with Tajweed
              </option>
              <option value="Noorani Qaida">
                Noorani Qaida
              </option>
              <option value="Hifz-ul-Quran">
                Hifz-ul-Quran
              </option>
              <option value="Islamic Studies">
                Islamic Studies
              </option>
            </select>

            {/* Gender */}
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            {/* Country */}
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
            >
              {loading ? "Submitting..." : "Register Now"}
            </button>

            {/* Success Message */}
            {success && (
              <p className="text-green-600 text-center font-medium">
                {success}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}