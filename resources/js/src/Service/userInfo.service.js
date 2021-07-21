import Config from "../Config";
import axios from "axios";
const url = `${Config.BASE_URL}/api/v1/auth/me`;

class UserInfo {
    get = async (token) => {
        const response = await axios
            .get(`${Config.BASE_URL}/api/v1/auth/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => response.data.message.user)
            .catch(() => console.log("ERROR"));
        return response;
    };
}

export default new UserInfo();
