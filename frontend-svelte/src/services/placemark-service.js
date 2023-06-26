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
                    id: response.data.id,
                });
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
          id: "",
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
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    },

    // @ts-ignore
    async addpoi(poi) {
		try {
            // @ts-ignore
            // eslint-disable-next-line no-undef
            const { id } = $user;
			// @ts-ignore
			const response = await axios.post(this.baseUrl + "/api/pois/" + id + "/user", poi);
			return response.status == 200;
		} catch (error) {
			return false;
		}
	},

	async getPoisbyUserId() {
		try {
            // @ts-ignore
            // eslint-disable-next-line no-undef
            const { id } = $user;
			// @ts-ignore
			const response = await axios.get(this.baseUrl + "/api/pois/" + id + "/user");
			return response.data;
		} catch (error) {
			return [];
		}
	}
};
