import { observable, action, runInAction } from "mobx";
import UserInfo from "./Service/userInfo.service";

class Store {
    @observable user = [];

    @action("get User Data")
    getUserInfo = async () => {
        var token = localStorage.getItem("auth_token");
        const data = await UserInfo.get(token);
        runInAction(() => {
            this.user.push(data);
        });
    };
}

export default new Store();
