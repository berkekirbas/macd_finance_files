import axios from "axios";
import { BASE_URL } from "../Config";

const authControlAndUserInfo = async () => {
    const response = await axios
        .get(`${BASE_URL}/api/v1/auth/me`, {
            withCredentials: true,
        })
        .then((response) => response.data)
        .catch(() => false);
    return response;
};

const isAuthenticatedAndGetUserInfo = async () => {
    const data = await authControlAndUserInfo();
    return data;
};

export { isAuthenticatedAndGetUserInfo };
