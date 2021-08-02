import React from "react";

import { useSelector } from "react-redux";
import { USER_TYPE } from "../../Config";

import { userSelector } from "../../store/slice/userSlice";

const Profile = () => {
    const { user } = useSelector(userSelector);

    return (
        <div className="col-md-3 static">
            <div className="profile-card">
                <img
                    src={`images/avatar/${user.avatar}`}
                    alt="user"
                    className="profile-photo"
                />
                <h5>
                    <a href="timeline.html" className="text-white">
                        {user.isTrader === USER_TYPE.TRADER
                            ? `${user.name} - Trader`
                            : `${user.name} - User`}
                    </a>
                </h5>
                <a href="#" className="text-white">
                    <i className="ion ion-android-person-add"></i>{" "}
                    {user.followers + " followers"}
                </a>
            </div>
            <ul className="nav-news-feed">
                <li>
                    <i className="icon ion-ios-paper"></i>
                    <div>
                        <a href="newsfeed.html">Home Page</a>
                    </div>
                </li>
                <li>
                    <i className="icon ion-ios-people-outline"></i>
                    <div>
                        <a href="newsfeed-friends.html">Friends</a>
                    </div>
                </li>
                <li>
                    <i className="icon ion-chatboxes"></i>
                    <div>
                        <a href="newsfeed-messages.html">Messages</a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
