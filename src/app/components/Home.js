import React from "react";

// Stateless component
export const Home = (props) => {
    return (
        <div>
            <p>In a new component</p>
            <p>
                Prop result: {props.result}
            </p>
        </div>
    );
}
