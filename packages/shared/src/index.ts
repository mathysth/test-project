export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  createdAt: Date;
}
