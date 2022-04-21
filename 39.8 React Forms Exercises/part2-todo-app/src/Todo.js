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
          <h2 className="Todo-todo"> {todo} </h2>
             Discription: {discription} -
             <button id="removeBox" onClick={removing}> X </button>
       </div>
    )
};

export default Todo;
