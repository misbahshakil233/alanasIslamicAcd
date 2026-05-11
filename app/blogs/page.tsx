"use client";

import { useState } from "react";

export default function BlogsClient() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const blogs = [
    {
      title: "How to Improve Quran Reading at Home",
      category: "Quran",
      date: "May 2026",
      desc: "Daily habits that help improve Quran recitation with Tajweed.",
    },
    {
      title: "Importance of Islamic Education for Kids",
      category: "Education",
      date: "April 2026",
      desc: "Islamic learning builds strong character and values.",
    },
    {
      title: "Best Tips for Online Learning",
      category: "Tips",
      date: "March 2026",
      desc: "Stay focused and consistent in online Islamic classes.",
    },
    {
      title: "Tafseer of Surah Al-Kawthar",
      category: "Quran",
      date: "Feb 2026",
      desc: "Simple explanation and life lessons from Surah Al-Kawthar.",
    },
  ];

  const filtered = blogs.filter((b) => {
    const matchCategory = filter === "All" || b.category === filter;

    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.desc.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16 px-6 md:px-20">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Islamic Blogs & Articles
        </h1>
        <p className="text-gray-500 mt-2">
          Learn Quran, Tafseer & Islamic knowledge
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">

        <input
          type="text"
          placeholder="Search Islamic blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-1/5 px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Categories</option>
          <option value="Quran">Quran</option>
          <option value="Education">Education</option>
          <option value="Tips">Tips</option>
        </select>
      </div>

      {/* Blogs */}
      <div className="grid md:grid-cols-3 gap-8">

        {filtered.length > 0 ? (
          filtered.map((blog, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition p-6"
            >
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {blog.category}
              </span>

              <h2 className="text-xl font-semibold mt-4 text-gray-800 hover:text-blue-600 transition">
                {blog.title}
              </h2>

              <p className="text-xs text-gray-400 mt-1">{blog.date}</p>

              <p className="text-gray-600 mt-4 text-sm">
                {blog.desc}
              </p>

              <button className="mt-5 text-blue-600 text-sm hover:underline">
                Read More →
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No blogs found 😔
          </p>
        )}
      </div>
    </div>
  );
}