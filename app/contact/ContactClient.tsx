"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactClient() {
  const [state, handleSubmit] = useForm("mrejqvyw");

  if (state.succeeded) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg">
          <h2 className="text-3xl font-bold text-blue-600">
            Message Sent Successfully 🎉
          </h2>

          <p className="mt-4 text-gray-600">
            Thank you for contacting Al Anas Islamic Academy.
            We will contact you soon In Sha Allah.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 md:px-16 text-center">

        <p className="uppercase tracking-[4px] text-sm text-blue-200">
          Contact Us
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Get In Touch With Us
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-200 leading-relaxed text-lg">
          Contact Al Anas Islamic Academy for Quran classes,
          free trial sessions, admissions, and Islamic learning programs.
        </p>
      </div>

      {/* CONTACT SECTION */}
      <div className="py-20 px-6 md:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT INFO */}
          <div>

            <h2 className="text-3xl font-bold text-gray-900">
              Contact Information
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              We are available 24/7 for Quran learning guidance,
              free trial classes, and student support.
            </p>

            {/* INFO CARDS */}
            <div className="mt-10 space-y-6">

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-blue-600">
                  📧 Email
                </h3>

                <a
  href="mailto:alanasislamicacedmay@gmail.com"
  className="mt-2 text-gray-700 break-all hover:text-blue-600 transition block"
>
  alanasislamicacedmay@gmail.com
</a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-blue-600">
                  📞 Phone
                </h3>

                <p className="mt-2 text-gray-700">
                  03362388766
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-blue-600">
                  📘 Facebook
                </h3>

                <a
  href="https://facebook.com/"
  target="_blank"
  className="mt-2 text-gray-700 hover:text-blue-600 transition block"
>
  Al Anas Islamic Academy
</a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-blue-600">
                  📸 Instagram
                </h3>

                <a
  href="https://instagram.com/alanasislamicacedmay"
  target="_blank"
  className="mt-2 text-gray-700 hover:text-blue-600 transition block"
>
  @alanasislamicacedmay
</a>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-10 rounded-3xl overflow-hidden shadow-xl">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0982822502665!2d67.06513177516642!3d24.928721577884787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ff25ad1159d%3A0x8eec20f0f935452f!2sAisha%20Manzil%20mosque!5e0!3m2!1sen!2s!4v1778338961605!5m2!1sen!2s"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl">

            <h2 className="text-3xl font-bold text-gray-900">
              Send Message
            </h2>

            <p className="mt-4 text-gray-600">
              Fill out the form below and our team will contact you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >

              {/* NAME */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              {/* COURSE */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Select Course
                </label>

                <select
                  name="course"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                >
                  <option>Quran Reading</option>
                  <option>Tajweed</option>
                  <option>Hifz-ul-Quran</option>
                  <option>Islamic Studies</option>
                  <option>Arabic Learning</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 resize-none"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg transition"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}