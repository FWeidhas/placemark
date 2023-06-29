/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";

import { user } from "../stores.js";

export const placemarkService = {
    baseUrl: "http://localhost:3000",

    // @ts-ignore
    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                const userinfo = await axios.get(this.baseUrl + "/api/users/" + response.data.id)
                user.set({
                    email: email,
                    token: response.data.token,
                    id: response.data.id,
                    isAdmin: userinfo.data.isAdmin,
                });
                localStorage.placemark = JSON.stringify({ email: email, token: response.data.token, id: response.data.id, isAdmin: userinfo.data.isAdmin});
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async logout() {
        user.set({
          email: "",
          token: "",
          id: "",
          isAdmin: false,
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("placemark");
    },
    
    // @ts-ignore
    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    },

    reload () {
        const placemarkCredentials = localStorage.placemark;
        if (placemarkCredentials) {
            const savedUser = JSON.parse(placemarkCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token,
                id: savedUser.id,
                isAdmin: savedUser.isAdmin,
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    },

    /**
     * @param {string} id
     */
    async getUser(id) {
        try {

            const response = await axios.get(this.baseUrl + "/api/users/" + id);
            
            return response.data;

        } catch (error) {
			return false;
		}   
    },

    async getAllUser() {
        try {

            const response = await axios.get(this.baseUrl + "/api/users");
            
            return response.data;

        } catch (error) {
			return [];
		}   
    },

    /**
     * @param {string} id
     */
    async deleteUserById(id) {
        try {
			const response = await axios.delete(this.baseUrl + "/api/users/" + id);
			return response;
		} catch (error) {
            console.log(error);
		}
    },


    /**
     * @param {any} poi
     */
    async addpoi(poi) {
		try {
			const response = await axios.post(this.baseUrl + "/api/pois", poi);
			return response.status == 201;
		} catch (error) {
			return false;
		}
	},

    /**
     * @param {{name: string;category: string;}} poi
     * @param {string} id
     */
    async editpoi(id, poi) {
		try {
			const response = await axios.put(this.baseUrl + "/api/pois/" + id, poi);
			return response.status == 201;
		} catch (error) {
			return false;
		}
	},

	/**
     * @param {string} id
     */
	async getPoisbyUserId(id) {
		try {
			const response = await axios.get(this.baseUrl + "/api/pois/" + id + "/user");
			return response.data;
		} catch (error) {
            console.log(error);
			return [];
		}
	},

    async getPoisCountbyUser() {
		try {
			const response = await axios.get(this.baseUrl + "/api/pois/users");
			return response.data;
		} catch (error) {
            console.log(error);
			return [];
		}
	}, 

    /**
     * @param {string} id
     */
    async getPoibyId(id) {
		try {
			const response = await axios.get(this.baseUrl + "/api/pois/" + id);
			return response.data;
		} catch (error) {
            console.log(error);
			return {};
		}
	},

    /**
     * @param {string} id
     */
        async deletePoibyId(id) {
            try {
                const response = await axios.delete(this.baseUrl + "/api/pois/" + id);
                return response.data;
            } catch (error) {
                console.log(error);
            }
        },

    async getAllPois() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois");
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    async getCategoryNumberofPois() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois/admin");
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    /**
     * @param {string} id
     * @param {undefined} [data]
     */
    async addImage(id, data) {
        try {
			const response = await axios.post(this.baseUrl + "/api/pois/" + id + "/uploadimage", data);
			return response.status == 201;
		} catch (error) {
            console.log(error);
		}
    },

    /**
     * @param {string} id
     * @param {import("axios").AxiosRequestConfig<any> | undefined} img
     */
    async deleteImage(id, img) {
        const response = await axios.delete(this.baseUrl +  "/api/pois/" + id + "/deleteimage/" + img);
        return response;
    },

    /**
     * @param {{description: string;latitude: number;longitude: number;}} details
     * @param {string} id
     */
    async addDetails(id ,details) {
        try {
			const response = await axios.post(this.baseUrl + "/api/pois/" + id + "/details", details);
			return response.status == 201;
		} catch (error) {
			return false;
		}
    },

    /**
     * @param {string} id
     */
    async deleteDetailsbyId(id) {
        try {
			const response = await axios.delete(this.baseUrl + "/api/details/" + id);
			return response.data;
		} catch (error) {
            console.log(error);
		}
    },

    /**
     * @param {string} id
     * @param {any} details
     */
    async editdetails(id, details) {
		try {
			const response = await axios.put(this.baseUrl + "/api/details/" + id, details);
			return response.status == 201;
		} catch (error) {
			return false;
		}
	},

};
