import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const TeamContainer = (props) => {
    // {mode: "home" | "away"}
    const [score, setScore] = useState(0);
    const [teamName, setTeamName] = useState();
    const nameInput = useRef();
    return (
        <div className="d-flex flex-column py-3 px-0 mx-3">
            {teamName ? (
                <h2 className="text-light display-4">{teamName}</h2>
            ) : (
                <React.Fragment>
                    <input 
                        ref={nameInput}
                        className="form-control"
                        type="text" 
                        placeholder={"name for " + props.mode + " team"} />
                    <button
                        onClick={(event) => {
                            // get a hold of the input
                            console.log(">>> 💚 this is the value of the input:", nameInput.current.value);
                            // setTeamName(input.value);
                            setTeamName(nameInput.current.value);
                            nameInput.current.value = "";
                        }} 
                        className="btn btn-warning my-2">
                        add team
                    </button>
                </React.Fragment>
            )}
            <p className="score-big text-white text-center">
                {score}
            </p>
            <button
                onClick={(event) => setScore(score + 7)} 
                className="btn my-2 btn-success">
                Touchdown
            </button>
            <button
                onClick={(event) => setScore(score + 3)}  
                className="btn my-2 btn-primary">
                Field goal
            </button>
        </div>
    );
};

TeamContainer.propTypes = {
    mode: PropTypes.oneOf([
        "home",
        "away"
    ])
};
