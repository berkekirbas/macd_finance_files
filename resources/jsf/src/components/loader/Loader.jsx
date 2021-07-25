import React from "react";

import { ClipLoader } from "react-spinners";

export default function Spinner() {
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
}
