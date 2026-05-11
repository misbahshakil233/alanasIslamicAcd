"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "How do online Quran classes work?",
    answer:
      "Our online Quran classes are conducted through Zoom or Google Meet with one-on-one live sessions between teacher and student.",
  },
  {
    question: "Do you provide female Quran teachers?",
    answer:
      "Yes, we provide qualified female Quran teachers for sisters, young girls, and families who prefer female tutors.",
  },
  {
    question: "Is free trial available?",
    answer:
      "Yes, we offer free trial classes so students can experience our teaching method before registration.",
  },
  {
    question: "Are classes available for kids?",
    answer:
      "Absolutely! We provide beginner-friendly Quran classes specially designed for children with interactive learning methods.",
  },
  {
    question: "What courses do you offer?",
    answer:
      "We offer Quran Reading, Tajweed, Hifz-ul-Quran, Islamic Studies, Arabic Learning, and basic Islamic education courses.",
  },
  {
    question: "Do you offer flexible timings?",
    answer:
      "Yes, classes are available 24/7 and students can choose timings according to their schedule and country.",
  },
  {
    question: "Which apps are used for classes?",
    answer:
      "We mainly use Zoom and Google Meet for smooth and interactive online Quran learning sessions.",
  },
  {
    question: "Can adults join Quran classes?",
    answer:
      "Yes, our Quran classes are available for kids, adults, sisters, brothers, and families worldwide.",
  },
];

export default function FaqsClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 md:px-16 text-center">

        <p className="uppercase tracking-[4px] text-sm text-blue-200">
          FAQs
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Frequently Asked Questions
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-200 leading-relaxed text-lg">
          Find answers to common questions about our online Quran classes,
          teachers, timings, free trials, and Islamic learning programs.
        </p>
      </div>

      {/* FAQ SECTION */}
      <div className="py-24 px-6 md:px-16">

        <div className="max-w-4xl mx-auto space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >

              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-6 py-5"
              >

                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>

                <span
                  className={`text-2xl text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-52 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >

                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">

          <h3 className="text-2xl font-bold text-gray-900">
            Still Have Questions?
          </h3>

          <p className="mt-4 text-gray-600">
            Contact our academy team for more details about courses and admissions.
          </p>
            
            <Link href="/contact">
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg transition">
            Contact Us
          </button>
          </Link>
          

        </div>
      </div>
    </section>
  );
}