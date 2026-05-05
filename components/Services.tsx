const services = [
  {
    title: "READ QURAN ONLINE",
    image: "/islamic.png.jpeg",
  },
  {
    title: "READ NOORANI QAIDA",
    image: "/qaidaa.png.jpeg",
  },
  {
    title: "6 KALIMAS IN ISLAM",
    image: "/home.png.jpeg",
  },
  {
    title: "NOORANI QAIDA IN ENGLISH",
    image: "/kids.png.jpeg",
  },
  {
    title: "LEARN NAMAZ & PRAYER ONLINE",
    image: "/anytime.png.jpeg",
  },
];

export default function Services() {
  return (
    <section className="bg-[#1a120b] text-white py-24 px-6 md:px-16">
      
      {/* Heading */}
      <p className="uppercase text-sm tracking-widest text-gray-400">
        Services
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mt-2">
        Available for 24/7
      </h2>

      <div className="w-16 .h-\[2px\] bg-orange-500 mt-4 mb-12"></div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 text-center">
        
        {services.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-lg font-semibold tracking-wide">
              {item.title}
            </h3>

            {/* More Link */}
            <p className="mt-3 text-sm text-gray-400 group-hover:text-white transition">
              MORE →
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}