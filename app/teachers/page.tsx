export const metadata = {
  title: "Online Quran Teachers | Al Anas Academy",
  description:
    "Meet our qualified male and female Quran teachers for Tajweed, Hifz, Qaida, and Islamic Studies.",
};

const teachers = [
  {
    name: "Hafiz Syed Anas Mehdi",
    role: "CEO & Quran Tutor",
    experience: "10+ Years Experience",
    language: "English • Urdu • Arabic",
    initials: "AM",
  },
  {
    name: "Syed Afaq Mehdi",
    role: "Islamic Studies Teacher",
    experience: "7+ Years Experience",
    language: "English • Urdu",
    initials: "AF",
  },
  {
    name: "Hafiza Misbah Shakil",
    role: "Female Quran Tutor",
    experience: "5+ Years Experience",
    language: "English • Urdu",
    initials: "MS",
  },
  {
    name: "Hafiz Muhammad Hamza",
    role: "Hifz & Tajweed Teacher",
    experience: "6+ Years Experience",
    language: "Arabic • Urdu",
    initials: "HM",
  },
];

export default function Teachers() {
  return (
    <section className="bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 md:px-16 text-center">

        <p className="uppercase tracking-widest text-sm text-blue-200">
          Our Qualified Tutors
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
          Meet Our Expert Quran Teachers
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-200 leading-relaxed">
          Learn Quran online with experienced male and female tutors specializing
          in Tajweed, Hifz, Qaida, and Islamic Studies through interactive one-on-one classes.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#trial">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Start Free Trial
          </button>
          </a>

          <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition">
            Request Female Teacher
          </button>
        </div>
      </div>

      {/* Teachers Cards */}
      <div className="py-24 px-6 md:px-16">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase text-sm">
            Our Teachers
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Experienced Male & Female Tutors
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Our certified Quran teachers help students worldwide learn Quran with proper Tajweed and understanding.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 text-center"
            >

              {/* Avatar */}
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                {teacher.initials}
              </div>

              {/* Name */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {teacher.name}
              </h3>

              {/* Role */}
              <p className="text-blue-600 text-sm mt-2 font-medium">
                {teacher.role}
              </p>

              {/* Experience */}
              <div className="mt-5 bg-gray-100 rounded-lg py-2 text-sm text-gray-700">
                {teacher.experience}
              </div>

              {/* Languages */}
              <p className="mt-4 text-gray-500 text-sm">
                {teacher.language}
              </p>

              {/* Rating */}
              <div className="mt-4 text-yellow-500 text-lg">
                ★★★★★
              </div>

              {/* Button */}
              <button className="mt-6 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
                Book Trial Class
              </button>

            </div>
          ))}

        </div>
      </div>

      {/* Bottom Features */}
      <div className="bg-white py-20 px-6 md:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-600">Certified</h3>
            <p className="mt-2 text-gray-600">
              Qualified Quran Tutors
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-600">24/7</h3>
            <p className="mt-2 text-gray-600">
              Flexible Timings
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-600">1-on-1</h3>
            <p className="mt-2 text-gray-600">
              Private Online Classes
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-600">Worldwide</h3>
            <p className="mt-2 text-gray-600">
              Students from Multiple Countries
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}