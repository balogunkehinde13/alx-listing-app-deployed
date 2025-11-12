"use client";

import React from "react";
import { Star } from "lucide-react";
import { Property } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import apartmentImg from "@/public/assets/apartment.jpeg";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  if (!property) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg text-gray-500 text-center">
        Loading property details...
      </div>
    );
  }

  const address = property.PropertyAddress || {};
  const imageSrc =
    property.image ||
    (typeof apartmentImg === "string" ? apartmentImg : apartmentImg.src);

  return (
    <Link href={`/property/${property.PropertyZPID}`} className="block">
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
        {/* Property Image */}
        <div className="relative w-full h-48">
          <Image
            src={imageSrc}
            alt={`${address.streetAddress || "Property"} image`}
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-t-2xl"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                typeof apartmentImg === "string"
                  ? apartmentImg
                  : apartmentImg.src;
            }}
          />
        </div>

        {/* Property Info */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold truncate">
            {address.streetAddress || "Unnamed Property"}
          </h3>

          <p className="text-sm text-gray-500">
            {[address.city, address.state, address.zipcode]
              .filter(Boolean)
              .join(", ") || "Address unavailable"}
          </p>

          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium">N/A</span>
          </div>

          <p className="text-blue-600 font-bold">
            ${property.Price?.toLocaleString() ?? "—"}
          </p>

          {property.yearBuilt && (
            <p className="text-sm text-gray-400">Built in {property.yearBuilt}</p>
          )}

          {property.PropertyZillowURL && (
            <a
              href={property.PropertyZillowURL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-blue-500 underline mt-2"
              onClick={(e) => e.stopPropagation()} // prevent interfering with Link
            >
              View on Zillow
            </a>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
