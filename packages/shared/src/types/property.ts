export type PropertyType = 'APARTMENT' | 'HOUSE' | 'LAND' | 'COMMERCIAL';

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  price: number;
  area: number;
  rooms: number;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePropertyInput {
  title: string;
  description: string;
  type: PropertyType;
  price: number;
  area: number;
  rooms: number;
  latitude: number;
  longitude: number;
}

export interface UpdatePropertyInput {
  title?: string;
  description?: string;
  price?: number;
  area?: number;
  rooms?: number;
}
