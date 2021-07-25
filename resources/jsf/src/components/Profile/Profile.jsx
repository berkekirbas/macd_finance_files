import React from "react";

const Profile = (props) => {
    const username =
        props.user.isTrader == 1
            ? `${props.user.name} - Trader`
            : `${props.user.name} - User`;
    return (
        <div className="col-md-3 static">
            <div className="profile-card">
                <img
                    src={`images/avatar/${props.user.avatar}`}
                    alt="user"
                    className="profile-photo"
                />
                <h5>
                    <a href="timeline.html" className="text-white">
                        {username}
                    </a>
                </h5>
                <a href="#" className="text-white">
                    <i className="ion ion-android-person-add"></i> 1,299
                    followers
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
