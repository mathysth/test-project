// Property listing types shared between API and web app

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  surface: number;
  rooms: number;
  location: PropertyLocation;
  type: PropertyType;
  status: PropertyStatus;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyLocation {
  city: string;
  postalCode: string;
  country: string;
  coordinates?: GeoCoordinates;
}

export interface GeoCoordinates {
  lat: number;
  lng: number;
}

export type PropertyType = 'apartment' | 'house' | 'land' | 'commercial';

export type PropertyStatus = 'available' | 'under_offer' | 'sold';

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}
