import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "James Otieno",
    location: "Nairobi, Kenya",
    message:
      "Car Soko made my car search so easy! I found my dream car in less than a week. Highly recommend!",
    rating: 5,
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Fatma Abdalla",
    location: "Mombasa, Kenya",
    message:
      "Excellent customer support and amazing deals. Their after-sales service is top notch.",
    rating: 4,
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Brian Kipchumba",
    location: "Eldoret, Kenya",
    message:
      "Smooth process from start to finish. Car Soko gave me confidence in every step of the purchase.",
    rating: 5,
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
        <p className="text-gray-500 mb-10">
          Trusted by hundreds of happy customers across Kenya
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{item.location}</p>
              <div className="flex justify-center mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{item.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
