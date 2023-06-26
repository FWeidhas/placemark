/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";

import { user } from "../stores";

export const placemarkService = {
    baseUrl: "http://localhost:3000",

    // @ts-ignore
    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token,
                });
                console.log(response.data);
                localStorage.placemark = JSON.stringify({ email: email, token: response.data.token});
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
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    },

    // @ts-ignore
    async addpoi(poi) {
		try {
			// @ts-ignore
			const response = await axios.post(this.baseUrl + "/api/pois/" + user.id + "/user", poi);
			return response.status == 200;
		} catch (error) {
			return false;
		}
	},

	async getPois() {
		try {
			// @ts-ignore
			const response = await axios.get(this.baseUrl + "/api/pois/" + user.id + "/user");
			return response.data;
		} catch (error) {
			return [];
		}
	}
};
