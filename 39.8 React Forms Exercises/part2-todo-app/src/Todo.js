import React from "react";
import './Todo.css';

const Todo = (props) => {

    const { id, todo, discription } = props;
    console.log(todo);
    const setTodo = {
        id,
        removing: props.remove,
        todo,
        discription
    };
    console.log(setTodo);
    const removing = () => props.remove (id);
    return (
        <div className="Todo">
        <ul>
        <li className="Todo-todo">{todo}</li>
        Discription: {discription} -
        <button id="removeBox" onClick={removing}> X</button>
        </ul>
        </div>
    )
};

export default Todo;