import Link from "next/link";

const courses = [
  {
    title: "Quran with Tajweed",
    description:
      "Learn to recite the Holy Quran with proper Tajweed rules and pronunciation.",
    image: "Qurancourse.webp",
    badge: "Most Popular",
    rating: 5,
    students: "1200+ Students",
  },
  {
    title: "Noorani Qaida",
    description:
      "Beginner-friendly course to learn Arabic letters and Quran reading basics.",
    image: "qaida.png",
    badge: "Beginner",
    rating: 4,
    students: "900+ Students",
  },
  {
    title: "Hifz-ul-Quran",
    description:
      "Memorize the Quran with expert guidance and structured plans.",
    image: "hifz.webp",
    badge: "Advanced",
    rating: 5,
    students: "800+ Students",
  },
  {
    title: "Islamic Studies",
    description:
      "Understand basic Islamic teachings, beliefs, and daily practices.",
    image: "/islamic.png.jpeg",
    badge: "Popular",
    rating: 4,
    students: "700+ Students",
  },
];

export default function Courses() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-white to-blue-50">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 tracking-tight">
        Online Quran Courses
      </h2>

      <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
        Explore structured Quran learning programs with expert teachers and flexible schedules.
      </p>

      {/* Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {courses.map((course, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
          >

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Badge */}
              <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">
                {course.badge}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-[260px]">

              <div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
                  {course.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center mt-2 text-yellow-400 text-sm">
                  {"★".repeat(course.rating)}
                  {"☆".repeat(5 - course.rating)}
                  <span className="ml-2 text-gray-500 text-xs">
                    {course.students}
                  </span>
                </div>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* CTA */}
              <Link href="/register">
                <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg font-medium shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  Enroll Now
                </button>
              </Link>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}