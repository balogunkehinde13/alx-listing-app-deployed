"use client";
import React from "react";
import { Star } from "lucide-react";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  if (!property) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg text-gray-500 text-center">
        Loading property details...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Property Image */}
      <div className="relative h-48">
        <Image
          src={property.image || "/placeholder.jpg"}
          alt={property.name || "Property"}
          className="w-full h-full object-cover"
        />
        {property.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {property.discount}
          </span>
        )}
      </div>

      {/* Property Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold truncate">
          {property.name || "Unnamed Property"}
        </h3>

        {property.address ? (
          <p className="text-sm text-gray-500">
            {property.address.city}, {property.address.country}
          </p>
        ) : (
          <p className="text-sm text-gray-400 italic">Address unavailable</p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium">
            {property.rating ? property.rating.toFixed(1) : "N/A"}
          </span>
        </div>

        {/* Price */}
        <p className="text-blue-600 font-bold">
          ${property.price ?? "—"}/night
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
