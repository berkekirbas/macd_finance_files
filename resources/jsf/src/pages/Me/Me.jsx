import React from "react";
import { useEffect } from "react";

import Header from "../../components/Header/Header";
import Loader from "../../components/loader/Loader";

import { GENDER } from "../../Config";

import { useDispatch, useSelector } from "react-redux";
import {
    userSelector,
    fetchUserInfo,
    fetchUserPosts,
} from "../../store/slice/userSlice";

const Me = () => {
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
                <div className="container">
                    <div className="timeline">
                        <div className="timeline-cover">
                            <div className="timeline-nav-bar hidden-sm hidden-xs">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="profile-info">
                                            <img
                                                src={`images/avatar/${user.avatar}`}
                                                alt=""
                                                className="img-responsive profile-photo"
                                            />
                                            <h3>{user.name}</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <ul className="list-inline profile-menu">
                                            <li>
                                                <a
                                                    href="timeline.html"
                                                    className="active"
                                                >
                                                    Timeline
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="follow-me list-inline">
                                            <li>
                                                {user.followers} people
                                                following{" "}
                                                {user.gender === GENDER.MALE
                                                    ? "his"
                                                    : "her"}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="navbar-mobile hidden-lg hidden-md">
                                <div className="profile-info">
                                    <img
                                        src={`images/avatar/${user.avatar}`}
                                        alt=""
                                        className="img-responsive profile-photo"
                                    />
                                    <h4>{user.name}</h4>
                                </div>
                                <div className="mobile-menu">
                                    <ul className="list-inline">
                                        <li>
                                            <a
                                                href="timline.html"
                                                className="active"
                                            >
                                                Timeline
                                            </a>
                                        </li>
                                    </ul>
                                    <button className="btn-primary">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="page-contents">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-7">
                                    <div className="create-post">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-7">
                                                <div className="form-group">
                                                    <img
                                                        src={`images/avatar/${user.avatar}`}
                                                        alt=""
                                                        className="profile-photo-md"
                                                    />
                                                    <textarea
                                                        name="texts"
                                                        id="exampleTextarea"
                                                        cols="30"
                                                        rows="1"
                                                        className="form-control"
                                                        placeholder="Write what you wish"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-sm-5">
                                                <div className="tools">
                                                    <ul className="publishing-tools list-inline">
                                                        <li>
                                                            <a href="#">
                                                                <i className="ion-images"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <button className="btn btn-primary pull-right">
                                                        Publish
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {userLoading ? null : (
                                        <Posts id={user.id} user={user} />
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
};

export default Me;

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
                                        <a
                                            href="timeline.html"
                                            className="profile-link"
                                        >
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
                                    <a className="btn text-green">
                                        <i className="icon ion-thumbsup"></i>{" "}
                                        {post.likes}
                                    </a>
                                    <a className="btn text-red">
                                        <i className="fa fa-thumbs-down"></i>{" "}
                                        {post.dislikes}
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
