import axios from "axios";
import { latestDetails, user } from "../stores.js";
import type { Poi, PoiDetails, User, UserDetails, Weather } from "./placemark-types.js";

export const placemarkService = {
  baseUrl: "http://localhost:3000",

  async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/api/users/authenticate`,
        { email, password }
      );
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        const userinfo = await axios.get(this.baseUrl + "/api/users/" + response.data.id);
        const userData: User = {
          email: email,
          token: response.data.token,
          id: response.data.id,
          isAdmin: userinfo.data.isAdmin,
        };
        user.set(userData);
        localStorage.placemark = JSON.stringify(userData);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async logout(): Promise<void> {
    user.set({
      email: "",
      token: "",
      id: "",
      isAdmin: false,
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("placemark");
  },

  async signup(firstName: string, lastName: string, email: string, password: string): Promise<boolean> {
    try {
      const userDetails: UserDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  },

  reload(): void {
    const placemarkCredentials = localStorage.placemark;
    if (placemarkCredentials) {
      const savedUser: User = JSON.parse(placemarkCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
        id: savedUser.id,
        isAdmin: savedUser.isAdmin,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  },

  async getUser(id: string): Promise<any | false> {
    try {
      const response = await axios.get<any>(this.baseUrl + "/api/users/" + id);
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async getAllUser(): Promise<any[]> {
    try {
      const response = await axios.get<any[]>(this.baseUrl + "/api/users");
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async deleteUserById(id: string): Promise<any | undefined> {
    try {
      const response = await axios.delete<any>(this.baseUrl + "/api/users/" + id);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async addpoi(poi: Poi): Promise<boolean> {
    try {
      const response = await axios.post<any>(this.baseUrl + "/api/pois", poi);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  },

  async editpoi(id: string, poi: Poi): Promise<boolean> {
    try {
      const response = await axios.put<any>(this.baseUrl + "/api/pois/" + id, poi);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  },

  async getPoisbyUserId(id: string): Promise<any[]> {
    try {
      const response = await axios.get<any[]>(this.baseUrl + "/api/pois/" + id + "/user");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async getPoisCountbyUser(): Promise<any[]> {
    try {
      const response = await axios.get<any[]>(this.baseUrl + "/api/pois/users");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async getPoibyId(id: string): Promise<any> {
    try {
      const response = await axios.get<any>(this.baseUrl + "/api/pois/" + id);
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  },

  async deletePoibyId(id: string): Promise<any> {
    try {
      const response = await axios.delete<any>(this.baseUrl + "/api/pois/" + id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async getAllPois(): Promise<any[]> {
    try {
      const response = await axios.get<any[]>(this.baseUrl + "/api/pois");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async getCategoryNumberofPois(): Promise<any[]> {
    try {
      const response = await axios.get<any[]>(this.baseUrl + "/api/pois/admin");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async getCategoryNumberofPoisUser(id: string): Promise<any[]> {
    try {
      const response = await axios.get<any[]>(this.baseUrl + "/api/pois/users/" + id);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async addImage(id: string, data?: FormData): Promise<boolean> {
    try {
      const response = await axios.post<any>(this.baseUrl + "/api/pois/" + id + "/uploadimage", data);
      return response.status == 201;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async deleteImage(id: string, img: string | number, index: string | number): Promise<any> {
    const response = await axios.delete<any>(this.baseUrl + "/api/pois/" + id + "/deleteimage/" + img + "/" + index);
    return response;
  },

  async addDetails(id: string, details: PoiDetails): Promise<boolean> {
    try {
      const response = await axios.post<any>(this.baseUrl + "/api/pois/" + id + "/details", details);
      latestDetails.set(response.data);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  },

  async deleteDetailsbyId(id: string): Promise<any> {
    try {
      const response = await axios.delete<any>(this.baseUrl + "/api/details/" + id);
      latestDetails.set(null);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async editdetails(id: string, details: any): Promise<boolean> {
    try {
      const response = await axios.put<any>(this.baseUrl + "/api/details/" + id, details);
      latestDetails.set(response.data);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  },

  async getWeather(id: string): Promise<Weather | false> {
    try {
      const response = await axios.get<Weather>(this.baseUrl + "/api/details/weather/" + id);
      return response.data;
    } catch (error) {
      return false;
    }
  },
};
