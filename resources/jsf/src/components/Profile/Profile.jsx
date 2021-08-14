import React, { useState } from "react";

import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { USER_TYPE } from "../../Config";

import { userSelector } from "../../store/slice/userSlice";

const Profile = () => {
    const { user, followers } = useSelector(userSelector);

    const history = useHistory();

    const goTradersForm = () => {
        history.push("/traders_application");
    };

    return (
        <>
            <div className="col-md-3 static">
                <div className="profile-card">
                    <img
                        src={`images/avatar/${user.avatar}`}
                        alt="user"
                        className="profile-photo"
                    />
                    <h5>
                        <Link to="/me" className="text-white">
                            {user.isTrader === USER_TYPE.TRADER
                                ? `${user.name} - Trader`
                                : `${user.name} - User`}
                        </Link>
                    </h5>
                    <a className="text-white">
                        <i className="ion ion-android-person-add"></i>{" "}
                        {followers + " followers"}
                    </a>
                </div>
                <ul className="nav-news-feed">
                    <li>
                        <i className="icon ion-ios-paper"></i>
                        <div>
                            <Link to="/">Home Page</Link>
                        </div>
                    </li>
                    <li>
                        <i className="icon ion-android-contact"></i>
                        <div>
                            <Link to="/me">My Profile</Link>
                        </div>
                    </li>
                    <li>
                        <i className="icon ion-ios-people-outline"></i>
                        <div>
                            <Link to="/explore">Explore</Link>
                        </div>
                    </li>
                    <li>
                        <i className="icon ion-chatboxes"></i>
                        <div>
                            <a>Messages(Coming Soon)</a>
                        </div>
                    </li>

                    {user.isTrader === USER_TYPE.TRADER ? null : (
                        <>
                            {user.isApplicated ? null : (
                                <li>
                                    <i className="icon ion-ios-paper-outline"></i>
                                    <div>
                                        <button
                                            onClick={goTradersForm}
                                            className="btn btn-primary"
                                        >
                                            Become a trader
                                        </button>
                                    </div>
                                </li>
                            )}{" "}
                        </>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Profile;
