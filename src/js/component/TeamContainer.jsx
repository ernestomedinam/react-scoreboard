import React from "react";
import PropTypes from "prop-types";

export const TeamContainer = (props) => {
    // {mode: "home" | "away"}
    return (
        <div className="d-flex flex-column py-3 px-0 mx-3">
            <input 
                className="form-control"
                type="text" 
                placeholder={"name for " + props.mode + " team"} />
            <p className="score-big text-white text-center">
                0
            </p>
            <button className="btn my-2 btn-success">
                Touchdown
            </button>
            <button className="btn my-2 btn-primary">
                Field goal
            </button>
        </div>
    );
};

TeamContainer.propTypes = {
    mode: PropTypes.oneOf([
        "home",
        "away"
    ]),
};
