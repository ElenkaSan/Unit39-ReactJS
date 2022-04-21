import React from "react";

const Box = (props) => {
    const { id, width, height, color } = props;
    console.log(color);
    const setStyle = {
        id,
        removing: props.remove,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${color}`
    };
    console.log(setStyle);
    const removing = () => props.remove (id);
    return (
        <div style={{
            display: "inline", float: "left", margin: "20px"
            }}>
            <p  style={{
                height: `${height}px`,
                width: `${width}px`,
                backgroundColor: props.color }} > </p>
            <button id="removeBox" onClick={removing}>X</button>
        </div >
    )
};

export default Box;
