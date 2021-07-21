import axios from "axios";
import Config from "../Config";

export const fetchCurrentUser = async (token) => {
    try {
        const { data } = await axios.get(`${Config.BASE_URL}/api/v1/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (data) {
            return {
                data,
            };
        }
    } catch (err) {
        if (err && err.response) {
            return {
                error: err.response.data.error,
            };
        }
    }
};

export const LogoutUser = async () => {
    let token = localStorage.token && JSON.parse(localStorage.token);

    try {
        const { data } = await axios.get(`${url}/api/v1/auth/logout`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (data) {
            return {
                data,
            };
        }
    } catch (err) {
        if (localStorage.token) {
            localStorage.removeItem("token");
        }
        if (err && err.response) {
            return {
                status: err.response.status,
                error: err.response.data.error,
            };
        }
    }
};
