import React, { useEffect } from "react";

import Header from "../../components/Header/Header";
import Loader from "../../components/loader/Loader";

import { Redirect, useParams } from "react-router-dom";

import { BASE_URL, GENDER, USER_TYPE } from "../../Config";

import { useDispatch, useSelector } from "react-redux";

import {
    userSelector,
    fetchUserInfo,
    fetchUserPosts,
    fetchProfileUserInfo,
    addFollower,
    removeFollower,
    likeUserPost,
} from "../../store/slice/userSlice";
import axios from "axios";

function Profile() {
    const { nickname } = useParams();

    const dispatch = useDispatch();
    const {
        user,
        userLoading,
        userHasErrors,
        userProfile,
        userProfileLoading,
        userProfileHasErrors,
        followersCount,
        isFollowing,
    } = useSelector(userSelector);

    useEffect(() => {
        dispatch(fetchUserInfo());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProfileUserInfo(nickname));
    }, [dispatch]);

    const handleFollow = (e) => {
        e.preventDefault();

        const data = {
            user_id: userProfile.id,
        };

        axios
            .post(`${BASE_URL}/api/v1/auth/follow`, data, {
                withCredentials: true,
            })
            .then((response) => dispatch(addFollower()))
            .catch((err) => {
                console.log(err);
            });
    };

    const handleUnfollow = (e) => {
        e.preventDefault();

        const data = {
            user_id: userProfile.id,
        };

        axios
            .post(`${BASE_URL}/api/v1/auth/unfollow`, data, {
                withCredentials: true,
            })
            .then((response) => dispatch(removeFollower()))
            .catch((err) => {
                console.log(err);
            });
    };
    const render = () => {
        if (userLoading && userProfileLoading) return <Loader />;

        if (user.nickname == nickname) {
            return <Redirect to="/me" />;
        }

        if (userHasErrors) {
            localStorage.removeItem("auth_control_s2");
            return <Redirect to="/landing" />;
        }

        return userProfileHasErrors ? (
            <div>Not Found User</div>
        ) : (
            <>
                <Header />
                <div className="container">
                    <div className="timeline">
                        <div className="timeline-cover">
                            <div className="timeline-nav-bar hidden-sm hidden-xs">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="profile-info">
                                            <img
                                                src={`/images/avatar/${userProfile.avatar}`}
                                                alt=""
                                                className="img-responsive profile-photo"
                                            />
                                            <h3>{userProfile.name}</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <ul className="list-inline profile-menu">
                                            <li>
                                                <a className="active">
                                                    Timeline
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="follow-me list-inline">
                                            <li>
                                                {followersCount} people
                                                following{" "}
                                                {userProfile.gender ===
                                                GENDER.MALE
                                                    ? "his"
                                                    : "her"}
                                            </li>
                                            <li>
                                                <button
                                                    onClick={
                                                        isFollowing
                                                            ? handleUnfollow
                                                            : handleFollow
                                                    }
                                                    className="btn-primary"
                                                >
                                                    {isFollowing
                                                        ? "Unfollow"
                                                        : "Follow"}
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="navbar-mobile hidden-lg hidden-md">
                                <div className="profile-info">
                                    <img
                                        src={`/images/${userProfile.avatar}`}
                                        alt=""
                                        className="img-responsive profile-photo"
                                    />
                                    <h4>{userProfile.name}</h4>
                                </div>
                                <div className="mobile-menu">
                                    <ul className="list-inline">
                                        <li>
                                            <a className="active">Timeline</a>
                                        </li>
                                    </ul>
                                    <button
                                        onClick={handleFollow}
                                        className="btn-primary"
                                    >
                                        {isFollowing ? "Unfollow" : "Follow"}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="page-contents">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-7">
                                    {userProfile.isTrader ===
                                    USER_TYPE.TRADER ? (
                                        <div className="create-post"></div>
                                    ) : null}
                                    {userProfileLoading ? null : (
                                        <Posts
                                            id={userProfile.id}
                                            user={userProfile}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return <>{render()}</>;
}

export default Profile;

const Posts = (props) => {
    const dispatch = useDispatch();
    const { userPosts, postsLoading, postsHasErrors } =
        useSelector(userSelector);

    useEffect(() => {
        if (props.id) {
            dispatch(fetchUserPosts(props.id));
        } else {
        }
    }, [dispatch]);

    const handleLike = (post_id) => {
        dispatch(likeUserPost(post_id));
    };

    const render = () => {
        if (postsLoading) return <Loader />;
        if (postsHasErrors) {
            return <div>An error occured</div>;
        }

        return (
            <>
                {userPosts.map((post) => (
                    <div key={post.post_id} className="post-content">
                        <div className="post-date hidden-xs hidden-sm">
                            <h5>{props.user.name}</h5>
                            <p className="text-grey">
                                {new Date(post.created_at).toLocaleDateString()}
                            </p>
                        </div>

                        <img
                            src={`images/posts/${post.post_image}`}
                            alt="post-image"
                            className="img-responsive post-image"
                        />
                        <div key={post.post_id} className="post-container">
                            <img
                                src={`images/avatar/${props.user.avatar}`}
                                alt="user"
                                className="profile-photo-md pull-left"
                            />
                            <div key={post.post_id} className="post-detail">
                                <div className="user-info">
                                    <h5>
                                        <a href="#" className="profile-link">
                                            {props.user.name}
                                        </a>{" "}
                                    </h5>
                                    <p className="text-muted">
                                        {new Date(
                                            post.created_at
                                        ).toLocaleString()}
                                    </p>
                                </div>
                                <div key={post.post_id} className="reaction">
                                    <a
                                        onClick={() => handleLike(post.post_id)}
                                        className="btn text-green"
                                    >
                                        <i className="icon ion-thumbsup"></i>{" "}
                                        {post.like}
                                    </a>
                                </div>
                                <div className="line-divider"></div>
                                <div className="post-text">
                                    <p>
                                        {post.post_content}
                                        <i className="em em-anguished"></i>{" "}
                                        <i className="em em-anguished"></i>{" "}
                                        <i className="em em-anguished"></i>
                                    </p>
                                </div>
                                <div className="line-divider"></div>
                                <div className="post-comment">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    return <>{render()}</>;
};
