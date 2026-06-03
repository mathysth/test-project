// Property domain
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: Location;
  type: PropertyType;
  surface: number;
  rooms: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Location {
  address: string;
  city: string;
  postalCode: string;
  country: string;
  coordinates?: GeoCoordinates;
}

export interface GeoCoordinates {
  lat: number;
  lng: number;
}

export type PropertyType = 'apartment' | 'house' | 'studio' | 'land' | 'commercial';

// User domain
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: Date;
}

export type UserRole = 'buyer' | 'seller' | 'agent' | 'admin';

// Pagination
export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

// API envelope
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
