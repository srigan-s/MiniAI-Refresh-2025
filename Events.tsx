import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const events = [
  {
    title: "AI Workshop at Tech High",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    description: "A hands-on workshop introducing students to machine learning basics and practical applications.",
    date: "March 15, 2024"
  },
  {
    title: "AI Career Fair",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    description: "Connecting students with industry professionals and exploring AI career opportunities.",
    date: "February 28, 2024"
  },
  {
    title: "Hackathon for Good",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    description: "Students developed AI solutions for local community challenges in this 48-hour event.",
    date: "January 20, 2024"
  }
];

const Events = () => {
  return (
    <section id="events" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 px-2">Recent Events</h1>
        
        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="h-[400px] md:h-[600px] rounded-2xl overflow-hidden"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full group">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
                    <div className="p-6 md:p-12">
                      <div className="inline-block bg-green-400 text-black px-4 md:px-6 py-1 md:py-2 rounded-full mb-4 md:mb-6 text-sm md:text-base font-semibold">
                        {event.date}
                      </div>
                      <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{event.title}</h2>
                      <p className="text-base md:text-xl max-w-2xl font-light line-clamp-3 md:line-clamp-none">{event.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Events;