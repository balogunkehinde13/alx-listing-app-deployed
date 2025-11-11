// Card props interface
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

// Button props interface
export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export interface PropertyProps {
  id: string;
  name: string;
    address: {
      state: string;
      city: string;
      country: string;
    },
    rating: number;
    category: string[];
    price: number;
    offers: {
      bed: string;
      shower: string;
      occupants: string;
    },
    image: string;
    discount: string;
  }

export interface PropertyAddress {
  streetAddress: string;
  zipcode: string;
  city: string;
  state: string;
  neighborhood?: string | null;
}

export interface Property {
  Area: number;
  Bathrooms: number;
  Bedrooms: number;
  Price: number;
  PropertyAddress: PropertyAddress;
  PropertyZPID: number;
  PropertyZillowURL: string;
  Source: string;
  daysOnZillow: number;
  favoriteCount: number;
  pageViewCount: number;
  yearBuilt: number;
  zestimate: number;
}