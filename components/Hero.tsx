"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "https://i.pinimg.com/originals/0f/d3/01/0fd301da564ed962317291af64f63a71.png",
    title: "Learn Quran Online",
    text: "Join expert teachers and start your journey today",
  },
  {
    image: "https://learnqurankids.com/wp-content/uploads/2020/12/online.jpeg",
    title: "Kids Quran Classes",
    text: "Interactive learning for children at home",
  },
  {
    image: "https://image.freepik.com/free-photo/holy-quran-with-tasbih-rosary-beads_97378-48.jpg",
    title: "Learn Quran Memorization",
    text: "Memorize Quran with expert guidance",
  },
  {
    image: "https://thumbs.dreamstime.com/b/holy-quran-tasbih-rosary-beads-dark-background-islamic-concept-170461532.jpg",
    title: "Learn with Tajweed",
    text: "Perfect your recitation with proper rules",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
          {slides[current].title}
        </h1>

        <p className="mt-6 text-gray-200 text-lg max-w-2xl">
          {slides[current].text}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          
          {/* Enroll */}
          <Link href="/register">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </Link>

          {/* Trial */}
          <a href="#trial">
            <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Start Free Trial
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}