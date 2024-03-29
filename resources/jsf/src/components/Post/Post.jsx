import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Loader from "../loader/Loader";

import {
    fetchPosts,
    postSelector,
    likePost,
} from "../../store/slice/postSlice";

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/slice/userSlice";

const Post = () => {
    const dispatch = useDispatch();

    const { user } = useSelector(userSelector);
    const { posts, loading, hasErrors } = useSelector(postSelector);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleLike = (post_id) => {
        dispatch(likePost(post_id));
    };

    const sendComment = () => {};

    const render = () => {
        if (loading) return <Loader />;
        if (hasErrors) {
            return <div>An error occured</div>;
        }

        return (
            <div>
                {posts.map((post) => (
                    <div key={post.post_id} className="post-content">
                        <img
                            src={`images/posts/${post.post_image}`}
                            alt="post-image"
                            className="img-responsive post-image"
                        />
                        <div key={post.post_id} className="post-container">
                            <img
                                src={`images/avatar/${post.user.avatar}`}
                                alt="user"
                                className="profile-photo-md pull-left"
                            />
                            <div key={post.post_id} className="post-detail">
                                <div className="user-info">
                                    <h5>
                                        <Link
                                            to={
                                                user.nickname ===
                                                post.user.nickname
                                                    ? "/me"
                                                    : `/profile/${post.user.nickname}`
                                            }
                                            className="profile-link"
                                        >
                                            {user.nickname ===
                                            post.user.nickname
                                                ? "Me"
                                                : post.user.name}
                                        </Link>{" "}
                                        <span className="following">
                                            Trader
                                        </span>
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
                                <div className="post-comment">
                                    <img
                                        src={`images/avatar/${user.avatar}`}
                                        alt=""
                                        className="profile-photo-sm"
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Post a comment"
                                        disabled
                                    />
                                    <button
                                        onClick={sendComment}
                                        className="btn ml-1 btn-xs btn-primary"
                                        disabled
                                    >
                                        Send
                                    </button>
                                </div>
                                {/*<div className="post-comment">
                                    <img
                                        src="images/avatar/avatar.png"
                                        alt=""
                                        className="profile-photo-sm"
                                    />
                                    <p>
                                        <a
                                            href="timeline.html"
                                            className="profile-link"
                                        >
                                            Diana{" "}
                                        </a>
                                        <i className="em em-laughing"></i> Lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud{" "}
                                    </p>
                                </div>
                                <div className="post-comment">
                                    <img
                                        src="images/avatar/avatar.png"
                                        alt=""
                                        className="profile-photo-sm"
                                    />
                                    <p>
                                        <a
                                            href="timeline.html"
                                            className="profile-link"
                                        >
                                            John
                                        </a>{" "}
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud{" "}
                                    </p>
                                </div>
                                <div className="post-comment">
                                    <img
                                        src="images/avatar/avatar.png"
                                        alt=""
                                        className="profile-photo-sm"
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Post a comment"
                                    />
                </div>*/}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return <div>{render()}</div>;
};

export default Post;
