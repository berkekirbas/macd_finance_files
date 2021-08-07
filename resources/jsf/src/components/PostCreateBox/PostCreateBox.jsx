import axios from "axios";
import { useState } from "react";

import { useSelector } from "react-redux";
import { BASE_URL } from "../../Config";

import { userSelector } from "../../store/slice/userSlice";

const PostCreateBox = () => {
    const [post_content, setContent] = useState("");
    const [post_image, setImage] = useState("");

    const { user } = useSelector(userSelector);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("post_content", post_content);
        formData.append("post_image", post_image);

        axios
            .post(`${BASE_URL}/api/v1/auth/sharePost`, formData)
            .then(() => window.location.reload())
            .catch((err) => console.log(err));
    };

    return (
        <div className="create-post">
            <form onSubmit={handleSubmit} className="row">
                <div className="col-md-7 col-sm-7">
                    <div className="form-group">
                        <img
                            src={`images/avatar/${user.avatar}`}
                            alt=""
                            className="profile-photo-md"
                        />
                        <textarea
                            style={{ resize: "none" }}
                            name="texts"
                            id="exampleTextarea"
                            cols="30"
                            rows="1"
                            className="form-control"
                            placeholder="Write what you wish"
                            value={post_content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="col-md-5 col-sm-5">
                    <div className="tools">
                        <ul className="publishing-tools list-inline">
                            <li>
                                <a>
                                    <input
                                        type="file"
                                        class="form-control"
                                        id="image"
                                        name="image"
                                        onChange={(e) =>
                                            setImage(e.target.files[0])
                                        }
                                    />
                                </a>
                            </li>
                        </ul>
                        <button
                            type="submit"
                            className="btn btn-primary pull-right"
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PostCreateBox;
