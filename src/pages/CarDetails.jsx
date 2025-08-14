import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const cars = [
  { id: 1, name: "Toyota Harrier", image: "https://images.unsplash.com/photo-1650436795838-6a9a214129d3?q=80&w=1163&auto=format&fit=crop", priceKES: 2800000, desc: "Reliable SUV, comfortable and fuel efficient.", specs: { engine: "2.0L", transmission: "Automatic", mileage: "12 km/l", seats: 5 } },
  { id: 2, name: "Mazda CX-5", image: "https://images.unsplash.com/photo-1614934415583-8da3f89f45ad?q=80&w=764&auto=format&fit=crop", priceKES: 3400000, desc: "Sporty compact SUV with great handling.", specs: { engine: "2.5L", transmission: "Automatic", mileage: "11 km/l", seats: 5 } },
  { id: 3, name: "BMW X5", image: "https://images.unsplash.com/photo-1590177059002-a09b88ab1167?q=80&w=1175&auto=format&fit=crop", priceKES: 9800000, desc: "Luxury performance SUV.", specs: { engine: "3.0L", transmission: "Automatic", mileage: "9 km/l", seats: 5 } },
  { id: 4, name: "Mercedes-Benz C-Class", image: "https://images.unsplash.com/photo-1475609678816-d013f834a053?q=80&w=1170&auto=format&fit=crop", priceKES: 7600000, desc: "Comfort and elegance in one package.", specs: { engine: "2.0L", transmission: "Automatic", mileage: "10 km/l", seats: 5 } },
  { id: 5, name: "Audi Q5", image: "https://images.unsplash.com/photo-1637677121980-6f39c0b61500?q=80&w=752&auto=format&fit=crop", priceKES: 8200000, desc: "Premium crossover with modern tech.", specs: { engine: "2.0L", transmission: "Automatic", mileage: "10 km/l", seats: 5 } },
];

const KES = (n) => new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) return <div className="p-6">Car not found.</div>;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <button onClick={() => navigate(-1)} className="text-sm text-blue-600 hover:underline mb-4">← Go Back</button>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <img src={car.image} alt={car.name} className="w-full h-80 object-cover" />
        <div className="p-6">
          <h1 className="text-2xl font-bold">{car.name}</h1>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-red-600 text-xl font-semibold">{KES(car.priceKES)}</div>
            <div>
              <button
                onClick={() => navigate("/vehicles")}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Add to Cart / Buy
              </button>
            </div>
          </div>

          <p className="mt-4 text-gray-700">{car.desc}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Engine</h4>
              <p className="text-gray-600">{car.specs.engine}</p>
            </div>
            <div>
              <h4 className="font-semibold">Transmission</h4>
              <p className="text-gray-600">{car.specs.transmission}</p>
            </div>
            <div>
              <h4 className="font-semibold">Mileage</h4>
              <p className="text-gray-600">{car.specs.mileage}</p>
            </div>
            <div>
              <h4 className="font-semibold">Seating</h4>
              <p className="text-gray-600">{car.specs.seats}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
