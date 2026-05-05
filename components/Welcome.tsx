export default function Welcome() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div className="relative">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.4gPGCy-Ue2kpX3jWOS2rMgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="welcome"
            className="rounded-2xl shadow-xl w-full object-cover"
          />

          {/* Small overlay card */}
          <div className="absolute bottom-\[-20px\] left-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-sm">
            10+ Years Experience
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-blue-600 font-semibold uppercase text-sm">
            Welcome to Our Academy
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800 leading-tight">
            Learn Quran Online with Expert Teachers
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            We provide professional Quran learning services for kids and adults.
            Our experienced teachers help students learn Quran with proper Tajweed
            in a flexible and friendly environment.
          </p>

          {/* Points */}
          <div className="mt-6 space-y-3">
            <p className="flex items-center gap-2 text-gray-700">
              ✅ One-on-One Classes
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              ✅ Certified Male & Female Teachers
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              ✅ Flexible Timings
            </p>
          </div>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Read More
          </button>
        </div>

      </div>

    </section>
  );
}