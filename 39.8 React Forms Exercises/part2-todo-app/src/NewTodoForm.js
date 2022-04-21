import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ addingList }) => {
    const INITIAL_STATE = {
        todo: "",
        discription: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        addingList({ ...formData, id: uuid() });
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
          <label style={{
             margin: "10px"
            }} htmlFor="Todo">Todo:</label>
          <input
            id="todo"
            type="text"
            name="todo"
            placeholder="todo"
            value={formData.todo}
            onChange={handleChange}
          />
    
          <label style={{
             margin: "10px"
            }} htmlFor="discription">Discriptiont:</label>
          <input
            id="discription"
            type="text"
            name="discription"
            value={formData.discription}
            onChange={handleChange}
          />
          <button style={{
             margin: "20px", cursor: "pointer", color: "rgb(255, 110, 20)",
            }} id="newTodo">Add Todo!</button>
        </form>
      );
    };

export default  NewTodoForm;