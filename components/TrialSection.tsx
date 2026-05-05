"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function TrialSection() {
  const [state, handleSubmit] = useForm("xeenjonz");

  return (
    <section
      id="trial"
      className="py-24 px-6 md:px-16 bg-blue-600 text-white"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Your Free Trial
          </h2>

          <p className="mt-4 text-blue-100 leading-relaxed">
            Join Al Anas Islamic Academy and begin your Quran learning journey
            with expert teachers. Flexible timings, one-on-one classes, and a
            free trial are waiting for you.
          </p>

          <ul className="mt-6 space-y-2 text-blue-100">
            <li>✔ 3 Days Free Trial</li>
            <li>✔ Certified Teachers</li>
            <li>✔ Flexible Timings</li>
            <li>✔ Online Classes Worldwide</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white text-black p-8 rounded-xl shadow-lg">

          {state.succeeded ? (
            <p className="text-green-600 text-center font-semibold">
              ✅ Your request has been submitted!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <h3 className="text-xl font-bold text-center text-gray-800">
                Start Free Trial
              </h3>

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
                id="email"
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
                className="w-full border p-3 rounded-md"
              />

              {/* Message */}
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="w-full border p-3 rounded-md"
              />

              <ValidationError prefix="Message" field="message" errors={state.errors} />

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                {state.submitting ? "Submitting..." : "Start Free Trial"}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}