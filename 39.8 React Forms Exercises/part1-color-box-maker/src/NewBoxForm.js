import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addingBox }) => {

    const INITIAL_STATE = {
        width: "",
        height: "",
        color: ""
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        addingBox({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width: {formData.width}</label>
            <input
                id="width"
                type="range"
                name="width"
                min="50"
                max="500"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height: {formData.height}</label>
            <input
                id="height"
                data-testid="height"
                type="range"
                name="height"
                min="50"
                max="500"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="color">Color</label>
            <input
                id="color"
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <button id="newBox">Add Box</button>
        </form>
    )
};

export default NewBoxForm;
