import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
    const style = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    return (
        <div style={style}>
            <ClipLoader color={"#123abc"} />
        </div>
    );
};

export default Spinner;
