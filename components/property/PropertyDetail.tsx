import React from "react";
import { Star } from "lucide-react";
import ReviewSection from "@/components/property/ReviewSection"; // adjust the import path if needed
import Image from "next/image";

interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    description: string;
    location: string;
    price: number;
    image: string;
    rating?: number;
    amenities?: string[];
  };
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      {/* Image */}
      <div className="mb-6">
        <Image
          src={property.image}
          alt={property.title}
          width={400}
          height={300}
          className="w-full h-96 object-cover rounded-2xl shadow"
        />
      </div>

      {/* Title and Rating */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        {property.rating && (
          <div className="flex items-center text-yellow-500">
            <Star className="w-5 h-5 fill-yellow-500" />
            <span className="ml-1">{property.rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      {/* Location */}
      <p className="text-gray-600 mb-4">{property.location}</p>

      {/* Price */}
      <p className="text-xl font-semibold text-blue-600 mb-6">
        ${property.price} / night
      </p>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About this property</h2>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>

      {/* Amenities */}
      {property.amenities && property.amenities.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
          <ul className="list-disc list-inside text-gray-700">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Reviews */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Guest Reviews</h2>
        <ReviewSection propertyId={property.id} />
      </div>
    </div>
  );
};

export default PropertyDetail;
