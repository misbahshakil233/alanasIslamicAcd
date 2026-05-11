"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryTestimonials() {
  const reviews = [
    {
      name: "Ayesha Khan",
      country: "Pakistan",
      role: "Student",
      text: "Al Anas Academy changed my Quran learning experience completely. Super professional and easy to follow.",
    },
    {
      name: "Muhammad Ali",
      country: "UAE",
      role: "Parent",
      text: "My kids love the classes. Teachers are very kind and structured in teaching.",
    },
    {
      name: "Fatima Noor",
      country: "UK",
      role: "Student",
      text: "Best Islamic online academy I’ve ever joined. Highly recommended!",
    },
    {
      name: "Hassan Ahmed",
      country: "Saudi Arabia",
      role: "Student",
      text: "Very smooth learning system with amazing guidance.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (i) => (i + reviews.length) % reviews.length;

  const visible = [
    reviews[getIndex(index - 1)],
    reviews[getIndex(index)],
    reviews[getIndex(index + 1)],
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50 flex justify-center">
      <div className="w-full max-w-6xl text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14">
          Loved by Students Worldwide
        </h2>

        {/* Slider */}
        <div className="relative flex items-center justify-center gap-8">

          {/* Left Button */}
          <button
            onClick={prev}
            className="absolute left-0 z-20 bg-white/80 backdrop-blur-xl shadow-xl hover:scale-110 transition p-3 rounded-full"
          >
            ◀
          </button>

          {/* Cards */}
          <div className="flex items-center gap-8">

            {visible.map((r, i) => {
              const isCenter = i === 1;

              return (
                <motion.div
                  key={r.name + i}
                  whileHover={{
                    rotateX: 6,
                    rotateY: -6,
                    scale: isCenter ? 1.05 : 0.95,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  animate={{
                    scale: isCenter ? 1.05 : 0.85,
                    opacity: isCenter ? 1 : 0.5,
                  }}
                  className={`relative w-80 p-8 rounded-3xl border border-white/30
                    backdrop-blur-2xl bg-white/40 shadow-2xl
                    ${isCenter ? "z-30" : "z-10"}
                  `}
                >
                  {/* Glow effect */}
                  {isCenter && (
                    <div className="absolute inset-0 rounded-3xl bg-blue-400/10 blur-2xl" />
                  )}

                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {r.name.charAt(0)}
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    “{r.text}”
                  </p>

                  {/* Name */}
                  <h4 className="mt-5 font-semibold text-gray-900">
                    {r.name}
                  </h4>

                  <p className="text-xs text-gray-500">
                    {r.role} • {r.country}
                  </p>

                  {/* Stars */}
                  <div className="text-yellow-400 mt-3">★★★★★</div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Button */}
          <button
            onClick={next}
            className="absolute right-0 z-20 bg-white/80 backdrop-blur-xl shadow-xl hover:scale-110 transition p-3 rounded-full"
          >
            ▶
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Auto progress bar */}
        <div className="mt-6 w-40 mx-auto h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            key={index}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-blue-600"
          />
        </div>
      </div>
    </section>
  );
}