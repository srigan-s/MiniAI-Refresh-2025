import React from 'react';

const executives = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    description: "Former AI Research Lead at Google, Sarah brings 15 years of experience in artificial intelligence and a passion for educational equity. She has led numerous initiatives making technology accessible to underserved communities."
  },
  {
    name: "Marcus Johnson",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    description: "With a background in both education and AI development at Amazon, Marcus oversees our technical curriculum and ensures our programs stay at the cutting edge of AI advancement."
  },
  {
    name: "Dr. Maya Patel",
    role: "Director of Education",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    description: "Former professor of Computer Science at MIT, Dr. Patel has dedicated her career to making complex technical concepts accessible to students of all backgrounds."
  }
];

const Executives = () => {
  return (
    <section id="executives" className="py-16 md:py-24 bg-gradient-to-b from-green-950 to-black">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 px-2">Our Leadership Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {executives.map((exec, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:transform hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{exec.name}</h3>
                  <p className="text-green-400 mb-4 font-light">{exec.role}</p>
                  <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">{exec.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Executives;