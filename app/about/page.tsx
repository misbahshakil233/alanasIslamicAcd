export const metadata = {
  title: "About Us | Al Anas Islamic Academy",
  description:
    "Learn about Al Anas Islamic Academy, providing online Quran classes, Tajweed, Hifz, Islamic Studies, and personalized learning for students worldwide.",
  keywords: [
    "About Al Anas Islamic Academy",
    "Online Quran Academy",
    "Quran Classes Online",
    "Female Quran Teacher",
    "Learn Quran Online",
    "Islamic Studies",
    "Hifz Quran",
    "Tajweed Classes",
  ],
};

export default function AboutPage() {
  return (
    <section className="bg-gray-50">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 md:px-16 text-center">

        <p className="uppercase tracking-[4px] text-sm text-blue-200">
          About Us
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
          Welcome to Al Anas Islamic Academy
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-200 leading-relaxed text-lg">
          Providing quality Quranic and Islamic education through interactive
          online learning for students around the world.
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="py-24 px-6 md:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Al Anas Islamic Academy"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />

            {/* Floating Box */}
            <div className="absolute -bottom-8 -right-5 bg-blue-600 text-white px-8 py-6 rounded-2xl shadow-xl">

              <h3 className="text-3xl font-bold">
                8+
              </h3>

              <p className="text-sm mt-1">
                Years Islamic Education
              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="text-blue-600 uppercase font-semibold tracking-[3px]">
              Our Journey
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
              Hafiza, Aalima & Psychology Educator
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              I completed my Hifz-ul-Quran and pursued 8 years of Islamic
              education from Anwar-ul-Quran, developing a strong foundation in
              Quranic studies, Tajweed, and Islamic teachings.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
              Alongside Islamic education, I also completed 4 years in
              Psychology from Karachi University, helping me better understand
              students’ learning styles, emotions, and personal development.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
              Through Al Anas Islamic Academy, our mission is to create a
              supportive and spiritually uplifting environment where children,
              sisters, and families can learn Quran online with confidence and
              comfort.
            </p>

            {/* FEATURE BOXES */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">

                <h3 className="font-semibold text-blue-600 text-lg">
                  Quran & Tajweed
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Learn Quran recitation with proper pronunciation and Tajweed rules.
                </p>

              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">

                <h3 className="font-semibold text-blue-600 text-lg">
                  Islamic Education
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Authentic Islamic teachings for children and adults.
                </p>

              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">

                <h3 className="font-semibold text-blue-600 text-lg">
                  Student Psychology
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Understanding students with patience, care, and support.
                </p>

              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">

                <h3 className="font-semibold text-blue-600 text-lg">
                  Worldwide Learning
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Interactive online classes for students from all over the world.
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}