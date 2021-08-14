//! gerekli kütüphaneler
import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

// ! gerekli componentler
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import TopList from "../../components/TopList/TopList";
import Loader from "../../components/loader/Loader";

import { useDispatch, useSelector } from "react-redux";

import {
    userSelector,
    fetchUserInfo,
    fetchAllUsers,
} from "../../store/slice/userSlice";

const Home = () => {
    const dispatch = useDispatch();
    const { user, userLoading, userHasErrors } = useSelector(userSelector);

    useEffect(() => {
        dispatch(fetchUserInfo());
    }, [dispatch]);

    const render = () => {
        if (userLoading) return <Loader />;
        if (userHasErrors) {
            localStorage.removeItem("auth_control_s2");
            return <Redirect to="/landing" />;
        }

        return (
            <>
                <Header />
                <div id="page-contents">
                    <div className="container">
                        <div className="row">
                            <Profile />
                            <div className="col-md-7">
                                <ExploreUsersComponent
                                    id={user.id}
                                    user={user}
                                />
                            </div>
                            <TopList />
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return <>{render()}</>;
};

export default Home;

const ExploreUsersComponent = (props) => {
    const dispatch = useDispatch();
    const { allUsers, allUsersLoading, allUsersHasErrors } =
        useSelector(userSelector);

    useEffect(() => {
        if (props.id) {
            dispatch(fetchAllUsers());
        } else {
        }
    }, [dispatch]);

    const render = () => {
        if (allUsersLoading) return <Loader />;
        if (allUsersHasErrors) {
            return <div>An error occured</div>;
        }

        return (
            <>
                {allUsers.map((user) => (
                    <div key={user.id} className="post-content">
                        <div key={user.id} className="post-container">
                            <img
                                src={`images/avatar/${user.avatar}`}
                                alt="user"
                                className="profile-photo-md pull-left"
                            />
                            <div key={user.id} className="post-detail">
                                <div className="user-info">
                                    <h5>
                                        <Link
                                            to={
                                                props.user.nickname ===
                                                user.nickname
                                                    ? `/me`
                                                    : `/profile/${user.nickname}`
                                            }
                                            className="profile-link"
                                        >
                                            {props.user.name === user.name
                                                ? "Me"
                                                : user.name}
                                        </Link>{" "}
                                    </h5>
                                    <p className="text-muted">
                                        Followers: {user.followersCount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    return <>{render()}</>;
};
