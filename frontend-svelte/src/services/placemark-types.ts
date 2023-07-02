export interface User {
    email: string;
    token: string;
    id: string;
    isAdmin: boolean;
  }
  
export interface UserDetails {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  export interface Poi {
    name: string;
    category: string;
  }
  
  export interface PoiDetails {
    description: string;
    latitude: number;
    longitude: number;
  }
  
  export interface Weather {
    // Define the properties returned by the weather API
    // Adjust these types based on the actual API response
    // Example: temperature: number;
  }
  
