const assures = [
  {
    title: "24/7 Flexible Schedule",
    desc: "Quran Online Academy offers best online Quran classes, through its interactive digital environment. You & your family can Read and Memorize Quran from the comfort of your home. QuranTutors are available 24 hours a day, seven days a week.",
    image: "clock.png",
  },
  {
    title: "One-to-One Classes",
    desc: "Personal Quran teacher for each student ensuring full attention and better learning experience.",
    image: "one-to-one.png",
  },
  {
    title: "Free Trial Classes",
    desc: "Start with free trial classes and experience our quality teaching before enrollment.",
    image: "freetrial.jpg",
  },
  {
    title: "Female Tutors",
    desc: "Experienced female Quran tutors available for sisters and kids in a comfortable environment.",
    image: "femaleteacher.png",
  },
  {
    title: "Multilingual Teachers",
    desc: "Our teachers can communicate in multiple languages including English and Arabic.",
    image: "multilanguage.webp",
  },
  {
    title: "Anywhere, Any Device",
    desc: "Learn Quran from anywhere using mobile, tablet, or computer with ease.",
    image: "anywhere.jpg",
  },
];

export default function Assure() {
  return (
    <section className="py-28 px-6 md:px-16 bg-gray-50 text-center">
      
    

      <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">
        Available For 24/7
      </h2>

      <div className="w-14 .h-\[3px\]bg-orange-500 mx-auto mt-4 mb-16"></div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-10 max-w-6xl mx-auto">
        
        {assures.map((item, index) => (
          <div key={index} className="text-center px-4">
            
            {/* Image */}
            <div className="flex justify-center items-center h-20">
  <img
    src={item.image}
    alt={item.title}
    className="max-h-18 object-contain"
  />
</div>

            {/* Title */}
            <h3 className="mt-6 text-lg font-bold text-gray-900 uppercase">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}