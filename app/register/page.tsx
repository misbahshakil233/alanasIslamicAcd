"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function RegisterForm() {
  const [role, setRole] = useState("student");
  const [state, handleSubmit] = useForm("mrejqvyw");

  if (state.succeeded) {
    return (
      <p className="text-center text-green-600 font-semibold mt-10">
        ✅ Registration submitted successfully!
      </p>
    );
  }

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Register Now
        </h1>

        {/* Toggle */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setRole("student")}
            className={`px-4 py-2 rounded-md ${
              role === "student" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("teacher")}
            className={`px-4 py-2 rounded-md ${
              role === "teacher" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Teacher
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border p-3 rounded-md"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border p-3 rounded-md"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full border p-3 rounded-md"
          />

          {/* Country */}
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="w-full border p-3 rounded-md"
          />

          {/* Role Based Fields */}
          {role === "student" ? (
            <>
              {/* Age */}
              <input
                type="number"
                name="age"
                placeholder="Student Age"
                className="w-full border p-3 rounded-md"
              />

              {/* Course */}
              <select
                name="course"
                required
                className="w-full border p-3 rounded-md"
              >
                <option value="">Select Course</option>
                <option>Quran with Tajweed</option>
                <option>Noorani Qaida</option>
                <option>Hifz-ul-Quran</option>
                <option>Islamic Studies</option>
              </select>
            </>
          ) : (
            <>
              {/* Qualification */}
              <input
                type="text"
                name="qualification"
                placeholder="Your Qualification"
                required
                className="w-full border p-3 rounded-md"
              />

              {/* Experience */}
              <input
                type="text"
                name="experience"
                placeholder="Teaching Experience"
                required
                className="w-full border p-3 rounded-md"
              />
            </>
          )}

          {/* Message */}
          <textarea
            name="message"
            placeholder="Additional Message"
            className="w-full border p-3 rounded-md"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          {/* Submit */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            {state.submitting ? "Submitting..." : "Register Now"}
          </button>

        </form>
      </div>
    </section>
  );
}