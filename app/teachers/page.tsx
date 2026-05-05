export const metadata = {
  title: "Teachers",
  description: "About Al Anas Academy",
};

const teachers = [
  {
    name: "Teacher Ahmed",
    subject: "Quran with Tajweed",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Teacher Fatima",
    subject: "Noorani Qaida",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Teacher Ali",
    subject: "Hifz-ul-Quran",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Teacher Ayesha",
    subject: "Basic Islamic Studies",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Teachers() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50 text-center">
      
      {/* Heading */}
      <p className="text-blue-600 uppercase text-sm font-semibold">
        Our Teachers
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
        Meet Our Expert Tutors
      </h2>

      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        Our experienced teachers are dedicated to providing the best Quran education.
      </p>

      {/* Cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition"
          >
            
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {teacher.name}
              </h3>

              <p className="text-sm text-blue-600 mt-1">
                {teacher.subject}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}