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
        coord: {
          lon: number;
          lat: number;
        };
        weather: {
          id: number;
          main: string;
          description: string;
          icon: string;
        }[];
        base: string;
        main: {
          temp: number;
          pressure: number;
          humidity: number;
          temp_min: number;
          temp_max: number;
        };
        visibility: number;
        wind: {
          speed: number;
          deg: number;
          gust: number;
        };
        clouds: {
          all: number;
        };
        dt: number;
        sys: {
          type: number;
          id: number;
          message: number;
          country: string;
          sunrise: number;
          sunset: number;
        };
        id: number;
        name: string;
        cod: number;
    }
  
