const features = [
  {
    title: "Qualified Teachers",
    desc: "Learn from certified and experienced Quran tutors.",
    icon: "📘",
  },
  {
    title: "One-on-One Classes",
    desc: "Personalized sessions for better understanding.",
    icon: "👨‍🏫",
  },
  {
    title: "Flexible Timing",
    desc: "Choose your preferred class schedule.",
    icon: "⏰",
  },
  {
    title: "Free Trial",
    desc: "Start with a free demo class today.",
    icon: "🎁",
  },
];

export default function Features() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white -mt-20 relative z-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center"
          >
            <div className="text-4xl">{item.icon}</div>

            <h3 className="mt-4 text-lg font-semibold text-blue-600">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}