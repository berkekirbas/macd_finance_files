import React, { Component } from "react";

import Post from "./Post";

import Loader from "./../../../components/Loader/Loader";

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: [
                {
                    name: "Alper Tatlısert",
                    avatar: "/images/avatar/naruto.jpg",
                    address: "alpertatlisert",
                    time: "23h",
                    text: "Macd Finance",
                    images: ["/images/uploads/X8LWIDREL6.jpg"],
                    comments: 20,
                    repost: 10,
                    favorites: 50,
                },
                {
                    name: "Alper Tatlısert",
                    avatar: "/images/avatar/sasuke.jpg",
                    address: "alpertatlisert",
                    time: "3d",
                    text: "Im so excited",
                    images: ["/images/uploads/X8LWIDR212.jpg"],
                    comments: 20,
                    repost: 10,
                    favorites: 50,
                },
                {
                    name: "Me",
                    avatar: "/images/avatar/gaara.jpg",
                    address: "berkekirbas",
                    time: "3d",
                    text: "Hello all",
                    images: [
                        "/images/uploads/ca47afcaeb91b16e5c80a2a70f7c3354.jpg",
                    ],
                    comments: 20,
                    repost: 10,
                    favorites: 50,
                },
                {
                    name: "Mahmut",
                    avatar: "/images/avatar/kakashi.jpg",
                    address: "mahmut",
                    time: "12h",
                    text: "Hello from Turkey.",
                    images: ["/images/uploads/X8LWIDREL2.jpg"],
                    comments: 20,
                    repost: 10,
                    favorites: 50,
                },
            ],
        };
    }
    componentDidMount() {
        setTimeout(
            function () {
                this.setState({ loading: false });
            }.bind(this),
            1000
        );
    }
    render() {
        const listTrends = this.state.posts.map((post) => (
            <Post key={post.name} post={post} />
        ));
        return <Loader loading={this.state.loading}>{listTrends}</Loader>;
    }
}

export default PostList;
