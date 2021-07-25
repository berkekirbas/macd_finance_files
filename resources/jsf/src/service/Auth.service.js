import axios from "axios";
import { BASE_URL } from "../Config";

const authControl = async (token) => {
    const response = await axios
        .get(`${BASE_URL}/api/v1/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(() => true)
        .catch(() => false);
    return response;
};

const isAuthenticated = async () => {
    const token = localStorage.getItem("auth_token");

    if (token == undefined) {
        return false;
    }

    const res = await authControl(token);
    return res;
};

export { isAuthenticated };
